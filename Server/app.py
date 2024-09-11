from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)

# Enable CORS to allow requests from your frontend
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load your trained model from the pickle file
with open('Model_RF.pkl', 'rb') as file:
    model = pickle.load(file)

gender_encoder = LabelEncoder()
occupation_encoder = LabelEncoder()

gender_encoder.fit([0, 1])
occupation_encoder.fit([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        print("Received data:", data) 

        # Ensure all required fields are present
        required_fields = [
            'gender', 'age', 'occupation', 'sleep_duration', 
            'bmi_category', 'heart_rate', 'daily_steps', 'systolic_bp'
        ]
        for field in required_fields:
            if field not in data:
                raise ValueError(f"Missing field: {field}")

        # Map categorical data
        gender = gender_encoder.transform([data['gender']])[0]
        occupation = occupation_encoder.transform([data['occupation']])[0]
        age = data['age']
        sleep_duration = data['sleep_duration']
        bmi_category = data['bmi_category']
        heart_rate = data['heart_rate']
        daily_steps = data['daily_steps']
        systolic_bp = data['systolic_bp']

        features = [
            gender, 
            age, 
            occupation, 
            sleep_duration, 
            bmi_category, 
            heart_rate, 
            daily_steps, 
            systolic_bp
        ]
        
        # Convert features to numpy array for prediction
        print("Features before prediction:", features)
        features = np.array(features).reshape(1, -1)
        prediction = model.predict(features)
        print("Prediction:", prediction)
        
        # Return the prediction result as JSON
        return jsonify({'prediction': prediction.tolist()})
        
    except Exception as e:
        print("Error during prediction:", str(e))  
        return jsonify({'error': str(e)}), 500  

if __name__ == '__main__':
    app.run(port=3001, debug=True)

