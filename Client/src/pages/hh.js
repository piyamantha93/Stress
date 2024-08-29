<div className="signup-container">
      <div className="signup-box">
        <div className="signup-avatar"></div>
        <h2 className="signup-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <table className="signup-table">
            <tbody>

            <label>
                Gender:
                <select id="gender" name="gender" onChange={handleChange} required>
                    <option value="" disabled selected>Select Gender</option>
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                </select>
            </label>
              <tr>
                <td>
                  <label htmlFor="age" className="input-icon">
                    <i className="fa fa-user"></i>
                  </label>
                </td>
                <td>
                  <input
                    type="text"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    required
                  />
                </td>
              </tr>
              <br />
              <label>
                Occupation:
                <select id="occupation" name="occupation" onChange={handleChange} required>
                    <option value="" disabled selected>Select Occupation</option>
                    <option value="0">Scientist</option>
                    <option value="1">Doctor</option>
                    <option value="2">Accountant</option>
                    <option value="3">Teacher</option>
                    <option value="4">Manager</option>
                    <option value="5">Engineer</option>
                    <option value="6">Sales Representative</option>
                    <option value="7">Salesperson</option>
                    <option value="8">Lawyer</option>
                    <option value="9">Software Engineer</option>
                    <option value="10">Nurse</option>
                </select>
            </label>
            <br />
              <tr>
                <td>
                  <label htmlFor="sleep_duration" className="input-icon">
                    <i className="fa fa-user"></i>
                  </label>
                </td>
                <td>
                  <input
                    type="sleep_duration"
                    id="sleep_duration"
                    value={email}
                    onChange={(e) => setSleep_duration(e.target.value)}
                    placeholder="Sleep duration"
                    required
                  />
                </td>
              </tr>
              <br />
              <select id="bmi_category" name="bmi_category" onChange={handleChange} required>
                    <option value="" disabled selected>Select BMI Category</option>
                    <option value="0">Underweight</option>
                    <option value="1">Normal</option>
                    <option value="2">Overweight</option>
                </select>
              <tr>
                <td>
                  <label htmlFor="heart_rate" className="input-icon">
                    <i className="fa fa-user"></i>
                  </label>
                </td>
                <td>
                  <input
                    type="heart_rate"
                    id="heart_rate"
                    value={heart_rate}
                    onChange={(e) => setHeart_Rate(e.target.value)}
                    placeholder="Heart Rate"
                    required
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label htmlFor="confirmPassword" className="signup-input-icon">
                    <i className="fa fa-lock"></i>
                  </label>
                </td>
                <td>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td colSpan="2">
                  <button type="submit" className="signup-button">Sign Up</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className="already-registered">
          Already registered? <a href="/login" className="login-link">Login here</a>
        </div>
      </div>
    </div>
  );
};