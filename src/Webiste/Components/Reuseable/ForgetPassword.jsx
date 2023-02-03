import React from 'react'
import { useState } from 'react';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const history = useNavigate();

    const submit = async (event) => {
        event.preventDefault();
        try {
          const formData = new FormData();
          formData.append("Email", email);
         const res = await axios.post(`${window.env.API_URL}/api/v1/adminpassword/forgot`, formData);
         const msg = res.data.message
         toast(msg)
          history("/");
        } catch (error) {
          const err = error.response.data.message;
          toast(err)
        }
      };
  return (
    <div>
      <form onSubmit={submit}>
      <div className="col-sm EmailForget">
      <div className='form-group forgetclass'>
      
      <input
       required
       onChange={(e) => setEmail(e.target.value)}
       value={email}
       name="Email"
       type="email"
       placeholder="Enter Email"
       className='forgetclass'
      />
    </div>
                 
                  </div>
                  <button type="submit" className="SubmitButton EmailForgetBtn">
                    Submit
                  </button>
      </form>
    </div>
  )
}

export default ForgetPassword
