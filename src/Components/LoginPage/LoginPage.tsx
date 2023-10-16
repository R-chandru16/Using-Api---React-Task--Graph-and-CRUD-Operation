import React, { useState } from 'react';
import { loginUser, loginAdmin, registerUser, registerAdmin } from '../Service/Userservice';
import './loginpage.css';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('user');
  const [name, setName] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [department, setDepartment] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const navigate = useNavigate();

  // Custom validation functions
  const isEmailValid = (email: string) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(email);
  };

  const isPasswordValid = (password: string | any[]) => {
    return password.length >= 8;
  };

  const isNameValid = (name: string) => {
    const namePattern = /^[A-Za-z\s]+$/;
    return namePattern.test(name);
  };

  const isStatusValid = (status: string) => {
    return status.trim() !== '';
  };

  const isDepartmentValid = (department: string) => {
    return department.trim() !== '';
  };

  const handleLogin = async () => {
    if (!isEmailValid(email) || !isPasswordValid(password)) {
      alert('Please check your email and password.');
      return;
    }

    try {
      if (role === 'Admin') {
        const adminResponse = await loginAdmin(email, password);
        console.log('Admin login successful:', adminResponse);
        alert('Login successful');
        navigate('/LaunchPage');
      } else {
        const userResponse = await loginUser(email, password);
        console.log('User login successful:', userResponse);
        alert('Login successful');
        navigate('/LaunchPage');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleRegistration = async () => {
    if (
      !isEmailValid(email) ||
      !isPasswordValid(password) ||
      !isNameValid(name) ||
      !isStatusValid(status) ||
      !isDepartmentValid(department)
    ) {
      alert('Please check your information.');
      return;
    }

    const userData = {
      email,
      password,
      name,
      status,
      role,
      department,
    };
    try {
      if (role === 'Admin') {
        const adminResponse = await registerAdmin(userData);
        console.log('Admin registration successful:', adminResponse);
        alert('Registration successful');
      } else {
        const userResponse = await registerUser(userData);
        console.log('User registration successful:', userResponse);
        alert('Registration successful');
      }
      setIsLogin(true);
    } catch (error) {
      alert('Registration failed. Please check your information.');
    }
  };

  return (
    <div>
      <div className="navbar">
        <header className="header">
          <h3>DEVELOPER TASK</h3>
        </header>
      </div>
      {isLogin ? (
        <div>
          <h2>Login</h2>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <p>
            Don't have an account?{' '}
            <span onClick={() => setIsLogin(false)}>Register here</span>
          </p>
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <label>
            Role:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <button onClick={handleRegistration}>Register</button>
          <p>
            Already have an account?{' '}
            <span onClick={() => setIsLogin(true)}>Login here</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
