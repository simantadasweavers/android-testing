import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useState } from "react"
import axios from "../Auth/Axios"
import { data } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      if(localStorage.getItem('access_token')){
        navigate("/admin/dashboard");
      }
    }, [])
    

    const handleRegister = (event) => {
        event.preventDefault();

            axios({
                method: 'POST',
                url: '/user/login',
                data: {
                    "email": email,
                    "password": password
                }
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                Swal.fire({
                    title: "User logged-in successfully",
                    icon: "success"
                });
                navigate("/");
            })
            .catch((err) => {
                Swal.fire({
                    title: err.response.data.result,
                    icon: "error"
                });
            })

    }

    return (
        <>
            <Header />

            <br />
            <br />


            <div class="container">
                <div className="row">
                    <div className="col-5">
                        <img src="src/assets/images/register.jpg" class="img-fluid" alt="" />
                    </div>
                    <div className="col-7">

                        <form onSubmit={handleRegister}>
                           
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                            </div>
                            <button type="submit" class="btn btn-custom btn-lg">Submit</button>
                        </form>

                        <br />
                        <br />

                        <a href="/register" style={{ color:'white' }}>Are you new user ?</a>

                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />

            <Footer />
        </>
    )
}
