import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        axios({
            method: 'POST',
            url: `${import.meta.env.VITE_BACKEND_URL}/admin/login`,
            data: { email: email, password: password }
        })
            .then((res) => {
                localStorage.setItem("access_token", res.data.access_token);
                localStorage.setItem("refresh_token", res.data.refresh_token)

                Swal.fire({
                    title: "You logged in successfully",
                    icon: "success"
                });

                location.href = "/dashboard";
            })
            .catch((err) => {
                Swal.fire({
                    title: "Credentials not match",
                    icon: "error"
                });
            })

    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />

            <div class="container">
                <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8">

                        <form onSubmit={handleLogin}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter your email" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter your password" />
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                    <div class="col-2"></div>
                </div>
            </div>
        </>
    )
}
