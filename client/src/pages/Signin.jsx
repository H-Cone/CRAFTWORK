    import React, { useState } from 'react'
    import { useFormik } from 'formik'
    import * as Yup from 'yup'
    import { Link, replace, useNavigate } from 'react-router-dom'
    import Button from '../components/Button'
    import Input from '../components/Input'
    import WaveBackground from '../components/WaveBackground'
    import './Signup.css'
import api from '../service/api'
import { useAuth } from '../context/AuthContext'


    const fields = [
    { 
      name: 'email', 
      label: 'Email', 
      type: 'email', 
      placeholder: 'you@example.com' 
    },

    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
    },
    ]

    const validationSchema = Yup.object({
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    })

    const Signin = () => {
    const navigate = useNavigate()
    const [serverError, setServerError] = useState('')
    const {login} = useAuth()

    const formik = useFormik({
        initialValues: {
        email: '',
        password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
        setServerError('')

        try {
            const res = await api.post('/auth/signin', values)
            login(res.data.token)
            navigate('/dashboard', replace)
        } catch (err) {
            setServerError(err.response?.data?.message || 'Something went wrong')
        } finally {
            setSubmitting(false)
        }
        },
    })

    return (
        <>
        <div className="signup-page">
            <div className="signup-card">
            <Link to="/" className="logo">
                <span className="logo-icon"></span>
                Craftwork
            </Link>

            <h1>
                Welcome back.
                <span>Pick up where you left off.</span>
            </h1>
            <p className="subtext">
                Sign in to manage your projects, proposals and payments.
            </p>

            <form onSubmit={formik.handleSubmit}>
                <div className="fields">
                {fields.map((f) => (
                    <div
                    key={f.name} className='col-full'
                    >
                    <Input
                        label={f.label}
                        type={f.type}
                        name={f.name}
                        placeholder={f.placeholder}
                        value={formik.values[f.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched[f.name] && formik.errors[f.name]}
                    />
                    </div>
                ))}
                </div>
                {serverError && <p className="form-error">{serverError}</p>}

                <Button
                type="submit"
                className="primary"
                disabled={formik.isSubmitting}
                >
                {formik.isSubmitting ? 'Loading...' : 'Signin →'}
                </Button>
            </form>

            <p className="switch">
                New to Craftwork? <Link to="/signup">Create an account</Link>
            </p>
            </div>

          <div className="signup-visual dark-card">
            <WaveBackground />
            <div className="glass-card">
                <div>
                <p className="glass-small">This week</p>
                <p className="glass-title">₦2.4M released to freelancers</p>
                </div>
                <span className="glass-pill">Live</span>
            </div>
            </div>
        </div>
        </>
    )
    }

    export default Signin