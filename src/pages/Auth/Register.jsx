import  { useState, useRef, useEffect } from 'react';
import './Register.css'; // Import your CSS file
// import { Link } from 'react-router-dom';
import BimoSpline from "../custom/BimoSpline"

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const eyeRef = useRef(null);
  const beamRef = useRef(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    document.getElementById('password').type = showPassword ? 'text' : 'password';
  };

//   const toggleShowConfirmPassword = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//     document.getElementById('confirmPassword').type = showConfirmPassword ? 'text' : 'password';
//   };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement your registration logic here (e.g., API call)
    console.log([username,password,email]);
    setUsername("");
    setPassword("");
    setEmail("");

    // Handle successful or failed registration (e.g., reset forms, show errors)
  };

  useEffect(() => {
    const eye = eyeRef.current;
    const beam = beamRef.current;

    if (eye && beam) {
      const root = document.documentElement;

      const handleMouseMove = (e) => {
        const rect = beam.getBoundingClientRect();
        const mouseX = rect.right + (rect.width / 2);
        const mouseY = rect.top + (rect.height / 2);
        const rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
        const degrees = (rad * (20 / Math.PI) * -1) - 350;

        root.style.setProperty('--beamDegrees', `${degrees}deg`);
      };

      root.addEventListener('mousemove', handleMouseMove);

      const handleEyeClick = (e) => {
        e.preventDefault();
        document.body.classList.toggle('show-password');
        document.getElementById('password').type = document.getElementById('password').type === 'password' ? 'text' : 'password';
        document.getElementById('password').focus();
      };

      eye.addEventListener('click', handleEyeClick);

      return () => {
        root.removeEventListener('mousemove', handleMouseMove);
        eye.removeEventListener('click', handleEyeClick);
      };
    }
  }, []);

  return (
    <div className='flex'>
      <form onSubmit={handleSubmit} className="register-form">
      <h1 className="register-font">Register</h1>
      <div className="form-item">
        <label htmlFor="username">Username</label>
        <input
        className='register-input'
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          autoComplete="off"
          // autocorrect="off"
          // autocapitalize="off"
          // spellcheck="false"
          data-lpignore="true"
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input
        className='register-input'
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          autoComplete="off"
          // autocorrect="off"
          // autocapitalize="off"
          // spellcheck="false"
          data-lpignore="true"
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="password">Password</label>
        <div className="input-wrapper">
          <input
          className='register-input'
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
            // autocorrect="off"
            // autocapitalize="off"
            // spellcheck="false"
            data-lpignore="true"
            required
          />
          <button className='register-button' type="button" id="eyeball" ref={eyeRef}>
            <div className="eye"></div>
          </button>
          <div id="beam" ref={beamRef}></div>
        </div>
      </div>
      
      <button className='register-button' type="submit" id="submit">
        Register
      </button>
      
    </form>
    {/* <BimoSpline/> */}
    </div>
  );
};

export default Register;