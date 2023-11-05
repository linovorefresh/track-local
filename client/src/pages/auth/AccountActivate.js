import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { salesAPI } from '../../api/salesAPI'
import { useAuth } from '../../context/auth'

export default function AccountActivate() {
    const { token } = useParams()
    const [auth, setAuth] = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (token) requestActivation(token);
    }, [token])

    const requestActivation = async () => {
        try {
            const { data } = await salesAPI.register({token});
            if( data?.error) {
                toast.error(data.error)
            } else {
                setAuth(data)
                localStorage.setItem('aa', JSON.stringify(data))
                toast.success('Successful Logged In!')
                navigate('/')
            }
        } catch (err) {
            console.log(err)
            toast.error('Something went wrong: RequestActivation. Try again.')
        }
    }

  return (
    <div className='display-1 d-flex justify-content-center align-items-center vh-100'>
      Please wait...
    </div>
  )
}
