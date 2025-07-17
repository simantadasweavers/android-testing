import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useState } from "react"
import axios from "../Auth/Axios"
import { data } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [pri_phone, setPriPhone] = useState();
    const [sec_phone, setSecPhone] = useState();
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

            axios({
                method: 'POST',
                url: '/user/register',
                data: {
                    "first_name": first_name,
                    "last_name": last_name,
                    "email": email,
                    "password": password,
                    "pri_phone": pri_phone,
                    "sec_phone": sec_phone,
                    "role": "user",
                    "credits": 0
                }
            })
            .then((res) => {
                localStorage.setItem('access_token', res.data.access_token);
                localStorage.setItem('refresh_token', res.data.refresh_token);
                Swal.fire({
                    title: "User registered successfully",
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
                                <label for="first_name" class="form-label">First Name</label>
                                <input type="text" class="form-control" value={first_name} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" id="first_name" />
                            </div>
                            <div class="mb-3">
                                <label for="last_name" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Primary Phone Number</label>
                                <input type="number" class="form-control" id="phone" value={pri_phone} onChange={(e) => setPriPhone(e.target.value)} placeholder="Enter your phone" />
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Secondary Phone Number</label>
                                <input type="number" class="form-control" id="phone" value={sec_phone} onChange={(e) => setSecPhone(e.target.value)} placeholder="Enter your phone" />
                            </div>
                            <button type="submit" class="btn btn-custom btn-lg">Submit</button>
                        </form>

                        <br />
                        <br />

                        <a href="/login" style={{ color:'white' }}>Already registered ?</a>

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
