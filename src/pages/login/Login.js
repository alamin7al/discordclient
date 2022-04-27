
import { useState } from 'react';
import {
    BrowserRouter as Router,

    NavLink,

    useLocation,
    useNavigate
} from "react-router-dom";
import { Card, Spinner } from 'react-bootstrap';
import useAuth from './useAuth';
import loginimg from '../img/login.webp'
import qr from '../img/qr.png'
import '../Footer/Footer.css'
const Login = () => {
    const { loginInUser, loading, error, user, googleLogin } = useAuth()

    const [loginDate, setLoginData] = useState({})
    const location = useLocation()
    let navigate = useNavigate()
    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginDate }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }




    const handleOnSubmit = (e) => {
        e.preventDefault()
        loginInUser(loginDate.email, loginDate.password, location, navigate)

    }

    const handleGoogleLogin = () => {
        googleLogin(location, navigate)
    }



    const myStyle = {
        background: `url(${loginimg})`,
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: '0.9'

    };




    return (
        <div style={myStyle} className="p-5">
            <div className=''>
                <div className="container ">
                    <Card className='p-0 cardregi'>
                        <div style={{ marginTop: '' }} className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 my-5 text-white fw-lighter ">
                                <h3 className='loginhedeing'>Welcome Back</h3>
                                <p className='logintexts'>We are Excited to see you again</p>
                                <form
                                    className='container'
                                    onSubmit={handleOnSubmit}>
                                    <div className="mb-1 text-start text-white fw-bolder lead">
                                        <label for="exampleInputEmail1" className="form-label fs-4">Email address</label>
                                        <input
                                            name='email'
                                            type="email" className="form-control" id="exampleInputEmail1"
                                            onChange={handleOnChange}
                                            placeholder='Type Your Email'
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-1 text-start text-white fw-bolder lead">
                                        <label for="exampleInputPassword1" className="form-label fs-4">Password</label>
                                        <input
                                            name='password'
                                            placeholder='Type Your Password'
                                            type="password" className="form-control"
                                            onChange={handleOnChange}
                                            id="exampleInputPassword1" />
                                    </div>
                                    <div className="text-start mt-3">
                                        <button
                                            className='submitbtn'
                                            type='submit'
                                        >
                                            Login</button>
                                    </div>

                                    {loading && <div>
                                        <>
                                            <Spinner animation="border" variant="primary" />
                                            <Spinner animation="border" variant="secondary" />
                                            <Spinner animation="border" variant="success" />
                                            <Spinner animation="border" variant="danger" />
                                            <Spinner animation="border" variant="warning" />
                                            <Spinner animation="border" variant="info" />
                                            <Spinner animation="border" variant="light" />
                                            <Spinner animation="border" variant="dark" />
                                            <Spinner animation="grow" variant="primary" />
                                            <Spinner animation="grow" variant="secondary" />
                                            <Spinner animation="grow" variant="success" />
                                            <Spinner animation="grow" variant="danger" />
                                            <Spinner animation="grow" variant="warning" />
                                            <Spinner animation="grow" variant="info" />
                                            <Spinner animation="grow" variant="light" />
                                            <Spinner animation="grow" variant="dark" />
                                        </>
                                    </div>}
                                    {user?.email &&
                                        <div class="alert alert-success" role="alert">
                                            User Created SuccessFulyy
                                        </div>
                                    }
                                    {error &&
                                        <div class="alert alert-warning" role="alert">
                                            {error}
                                        </div>
                                    }
                                </form>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12   my-5">
                                <div className='my-5'>
                                    <img src={qr} className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div style={{ marginTop: '-30px' }} className="text-center">
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to='/register'><p className=' fw-light  askbtn'
                                >New User?Please Register</p>
                            </NavLink>

                            <button
                                className='submitbtn'
                                onClick={handleGoogleLogin}
                            >
                                Google </button>
                        </div>
                    </Card>

                </div>
            </div>
        </div >
    );
};

export default Login;