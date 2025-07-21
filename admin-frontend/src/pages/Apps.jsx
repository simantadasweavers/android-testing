import { Sidebar } from "../components/Sidebar"
import { useEffect, useState } from "react"
import { Link } from "react-router";
import Axios from "../Auth/Axios";


export const Apps = () => {

    const [app_detail, setApps] = useState({});

    useEffect(() => {
        Axios({
            url: `${import.meta.env.VITE_BACKEND_URL}/admin/apps`,
            method: 'post',
        })
            .then((res) => {
                setApps(res.data.apps);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])

    return (
        <>

            <Sidebar />

            <div className="content-wrapper">
                <div className="page-content fade-in-up">

                    <div className="row">
                        <div className="col-lg-12">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">App Name</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Tester</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Submission Date</th>
                                        <th scope="col">Testing Start Date</th>
                                        <th scope="col">Test Cases Days</th>
                                        <th scope="col">Tester</th>
                                        <th scope="col">App Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {app_detail.length ? app_detail.map((x, y) => {
                                        let status = null;
                                                if(x.status == "approval"){
                                                    status = "Waiting For Approval";
                                                }
                                                else if(x.status == "progress"){
                                                    status = "In progress";
                                                }
                                                else if(x.status == "ready"){
                                                    status = "Ready for live";
                                                }
                                        return (
                                            <tr>
                                                <th scope="row">{x.app_name}</th>
                                                <td>{x.user_id.first_name+" "+x.user_id.last_name}</td>
                                                <td>NULL</td>
                                                <td>{status}</td>
                                                <td>{x.date}</td>
                                                <td>{x.test_start_date}</td>
                                                <td>5 day</td>
                                                <td>
                                                    {x.tester_id ? <>
                                                    <span class="badge rounded-pill" style={{backgroundColor:'green'}}>
                                                        {x.tester_id.first_name+" "+x.tester_id.last_name}
                                                    </span>
                                                    <br /><br />
                                                    <Link to="/assign-tester" state={x._id} class="btn btn-warning">Re Assign Tester</Link>
                                                    </>
                                                 : <Link to="/assign-tester" state={x._id} class="btn btn-dark">Assign Tester</Link>
                                                    }
                                                 </td>
                                                <td>
                                                    <button type="button" class="btn btn-dark" style={{marginLeft:'10px'}}>Change Status</button>
                                                </td>
                                            </tr>
                                        )
                                    }) : ''}

                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
