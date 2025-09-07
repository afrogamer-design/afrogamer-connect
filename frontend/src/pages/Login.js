import React, { useState } from "react";
import supabase from "../supabaseClient";

function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  async function handleSendOtp() {
    const { error } = await supabase.auth.signInWithOtp({ phone });
    if (error) console.error(error.message);
    else setStep(2);
  }

  async function handleVerifyOtp() {
    const { error } = await supabase.auth.verifyOtp({ phone, token: otp, type: "sms" });
    if (error) console.error(error.message);
    else window.location.href = "/dashboard";
  }

  return (
    <div className="login">
      <h2>Login</h2>
      {step === 1 ? (
        <>
          <input type="text" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleSendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
}

export default Login;
