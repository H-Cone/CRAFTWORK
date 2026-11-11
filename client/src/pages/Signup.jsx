    import React, { useState } from 'react'
    import { useFormik } from 'formik'
    import * as Yup from 'yup'
    import { Link, useNavigate } from 'react-router-dom'
    import Button from '../components/Button'
    import Input from '../components/Input'
    import WaveBackground from '../components/WaveBackground'
    import './Signup.css'
import api from '../service/api'

    const roles = [
    { value: 'client', label: 'I want to hire' },
    { value: 'freelancer', label: 'I want to work' },
    ]

    const fields = [
    {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Ada',
        half: true,
    },
    {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Okafor',
        half: true,
    },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'At least 8 characters',
    },
    ]

    const validationSchema = Yup.object({
    firstName: Yup.string().trim().required('First name is required'),
    lastName: Yup.string().trim().required('Last name is required'),
    email: Yup.string().email('Enter a valid email').required('Email is required'),
    password: Yup.string().min(8, 'At least 8 characters').required('Password is required'),
    role: Yup.string().oneOf(['client', 'freelancer']).required(),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms'),
    })

    const Signup = () => {
    const navigate = useNavigate()
    const [serverError, setServerError] = useState('')

    const formik = useFormik({
        initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: 'client',
        terms: false,
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
        setServerError('')

        try {
            const { terms, ...data } = values
            await api.post('/auth/signup', data)
            navigate('/signin')
        } catch (err) {
            setServerError(err.response?.data?.message || 'Something went wrong')
            // console.log(err);
        } finally {
            setSubmitting(false)
        }
        },
    })

    return (
        <>
        <div className="signup-page">
            <div className="signup-visual dark-card">
            <WaveBackground />
            <div className="glass-card">
                <div>
                <p className="glass-small">Join 2,400+ freelancers</p>
                <p className="glass-title">Get paid by milestone, every time</p>
                </div>
                <span className="glass-pill">Escrow</span>
            </div>
            </div>

            <div className="signup-card">
            <Link to="/" className="logo">
                <span className="logo-icon"></span>
                Craftwork
            </Link>

            <h1>
                Create your account.
                <span>Start in a minute.</span>
            </h1>
            <p className="subtext">
                Choose how you'll use Craftwork. You can't change this later.
            </p>

            <form onSubmit={formik.handleSubmit}>
                <div className="role-toggle">
                {roles.map((r) => (
                    <button
                    key={r.value}
                    type="button"
                    className={formik.values.role === r.value ? 'active' : ''}
                    onClick={() => formik.setFieldValue('role', r.value)}
                    >
                    {r.label}
                    </button>
                ))}
                </div>

                <div className="fields">
                {fields.map((f) => (
                    <div
                    key={f.name}
                    className={f.half ? 'col-half' : 'col-full'}
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

                <label className="terms">
                <input
                    type="checkbox"
                    name="terms"
                    checked={formik.values.terms}
                    onChange={formik.handleChange}
                />{' '}
                I agree to the terms and privacy policy
                </label>
                {formik.touched.terms && formik.errors.terms && (
                <p className="field-error">{formik.errors.terms}</p>
                )}

                {serverError && <p className="form-error">{serverError}</p>}

                <Button
                type="submit"
                className="primary"
                disabled={formik.isSubmitting}
                >
                {formik.isSubmitting ? 'Creating...' : 'Create account →'}
                </Button>
            </form>

            <p className="switch">
                Already have an account? <Link to="/signin">Sign in</Link>
            </p>
            </div>
        </div>
        </>
    )
    }

    export default Signup