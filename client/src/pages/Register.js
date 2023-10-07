import React, { useState } from 'react'
// import axios from axios
import { toast } from 'react-hot-toast'

import { salesAPI } from '../api/SalesAPI';

export default function Register() {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            // const { data } = await axios.post(`${API}/pre-register`, {
            //     email,
            //     password
            // })
            const { data  } = salesAPI.preRegister();

            if(data?.error) {
                toast.error(data?.error)
            } else {
                toast.success("Please check your email to complete registration");
            }
        } catch (err) {
            console.log(err)
            toast.error("Something went wrong. Try again.")
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

                    <button className="btn btn-primary col-12 mb-4">Login</button>
                </form>

                <a className="text-danger pointer">Forgot Password</a>
                </div>
            </div>
        </div>
    </div>
  )
}
