import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import axios from axios
import { toast } from 'react-hot-toast'

import { salesAPI } from '../api/salesAPI.js';

export default function Register() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // const { data } = await axios.post(`${API}/pre-register`, {
            //     email,
            //     password
            // })
            setLoading(true);
            const { data  } = salesAPI.preRegister({email, password});

            if(data?.error) {
                toast.error(data?.error)
                setLoading(false)
            } else {
                toast.success("Please check your email to complete registration");
                setLoading(false)
                navigate("/")
            }
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong. Try again.")
            setLoading(false)
        }
    }
  return (
    <div>
       <h1 className="display-1 bg-primary text-light p-5">Register</h1>

        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5">
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="Enter your email"
                    className="form-control mb-4"
                    required
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value.toLowerCase())}
                    />

                    <input
                    type="password"
                    placeholder="Enter your password"
                    className="form-control mb-4"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className="btn btn-primary col-12 mb-4" disabled={loading}>
                        {loading ? 'Waiting..' : "Register"}
                    </button>
                </form>
                {/* <a className="text-danger pointer">Forgot Password</a> */}
                </div>
            </div>
        </div>
    </div>
  )
}
