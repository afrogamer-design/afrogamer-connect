// frontend/src/pages/Login.js
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: phone,
      });
      
      if (error) {
        setMessage(error.message);
      } else {
        setMessage('OTP sent to your phone!');
      }
    } catch (error) {
      setMessage('Error sending OTP');
    }
    
    setLoading(false);
  };

  return (
    <div className="login-container">
      <h2>Login with Phone</h2>
      <form onSubmit={handleLogin}>
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send OTP'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
