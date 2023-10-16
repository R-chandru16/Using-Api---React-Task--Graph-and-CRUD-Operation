// UserService.js

const User_BASE_URL = 'https://localhost:44355/api/User';
const Admin_BASE_URL='https://localhost:44355/api/Admin';
// Function to perform user registration
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${User_BASE_URL}/Register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 400) {
      throw new Error('Registration failed: Invalid data provided.');
    } else {
      throw new Error('Registration failed: Server error.');
    }
  } catch (error) {
    throw error;
  }
};

// Function to perform user login
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${User_BASE_URL}/Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 400) {
      throw new Error('Login failed: Invalid email or password.');
    } else {
      throw new Error('Login failed: Server error.');
    }
  } catch (error) {
    throw error;
  }
};



export const registerAdmin = async (userData) => {
  try {
    const response = await fetch(`${Admin_BASE_URL}/Register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 400) {
      throw new Error('Registration failed: Invalid data provided.');
    } else {
      throw new Error('Registration failed: Server error.');
    }
  } catch (error) {
    throw error;
  }
};

// Function to perform user login
export const loginAdmin = async (email, password) => {
  try {
    const response = await fetch(`${Admin_BASE_URL}/Login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return await response.json();
    } else if (response.status === 400) {
      throw new Error('Login failed: Invalid email or password.');
    } else {
      throw new Error('Login failed: Server error.');
    }
  } catch (error) {
    throw error;
  }
};
