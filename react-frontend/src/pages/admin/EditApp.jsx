import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/admin/Sidebar"
import { FinalApp } from "./FinalApp";
import { currentDate } from "../../Helpers/Date";
import axios from "../../Auth/Axios";
// import axios from "axios";


export const EditApp = () => {

    const [app_name, setAppName] = useState(null);
    const [google_play_url, setGooglePlayUrl] = useState(null);
    const [apk_file, setApk] = useState(null);
    const [app_icon, setAppIcon] = useState(null);
    const [update_apk_file, UpdateSetApk] = useState(null);
    const [update_app_icon, UpdateSetAppIcon] = useState(null);
    const [addi_info, setAddiInfo] = useState(null);
    const [appid, setAppId] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();


    const handleAppSubmit = (event) => {
        event.preventDefault();

            axios({
                method: 'put',
                url: '/app/update',
                data: {
                    app_name: app_name,
                    google_play_url: google_play_url,
                    apk_file: update_apk_file,
                    apk_image: update_app_icon,
                    additional_info: addi_info,
                    app_id: appid,
                },
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => {
                Swal.fire({
                    title: res.data.result,
                    icon: "success"
                });
                navigate("/admin/dashboard");
            })
            .catch((err) => {
                console.error(err);
            })

    }


    useEffect(() => {
        let app_data = location.state || {};
        setAppId(app_data.app_id);
        axios({
            method: 'post',
            data: { "app_id": app_data.app_id },
            url: '/app/details'
        }).then((res) => {
            setAppName(res.data.app[0].app_name);
            setGooglePlayUrl(res.data.app[0].google_play_url);
            setApk(res.data.app[0].apk_file);
            setAppIcon(res.data.app[0].apk_image);
            setAddiInfo(res.data.app[0].additional_info);
        })
            .catch((err) => { console.error(err); })
    }, [])


    return (
        <>

            <title>Edit App Details</title>

            <div class="container-fluid">
                <div class="row">
                    <Sidebar />

                    <div class="col-md-10 p-4">
                        <h1>Submit Your App <span class="text-success">Get your app tested by 25 professional testers in 14 days</span></h1>
                        <div class="d-flex align-items-center mb-4">
                            <div class="step-card d-flex align-items-center">
                                <div class="step bg-success"><span class="text-white">✔</span></div>
                                <span>100% Production Access Guarantee</span>
                            </div>
                            <div class="step-card d-flex align-items-center">
                                <div class="step bg-success"><span class="text-white">✔</span></div>
                                <span>Setup Guide <small>Step 1</small></span>
                            </div>
                            <div class="step-card d-flex align-items-center">
                                <div class="step bg-success"><span class="text-white">✔</span></div>
                                <span>App Details <small>Step 2</small></span>
                            </div>
                            <div class="step-card d-flex align-items-center">
                                <div class="step"><span>✔</span></div>
                                <span>Review & Submit <small>Step 3</small></span>
                            </div>
                        </div>
                        <div class="step-card">
                            <h3>App Details</h3>
                            <p>Provide the basic information about your app.</p>
                            <form onSubmit={handleAppSubmit}>
                                <div class="mb-3">
                                    <label class="form-label">App Name </label>
                                    <input type="text" class="form-control bg-dark text-white" placeholder="Enter your app name" value={app_name} onChange={(e) => setAppName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Testing URL </label>
                                    <input type="text" class="form-control bg-dark text-white" placeholder="Enter Google Play testing URL" value={google_play_url} onChange={(e) => setGooglePlayUrl(e.target.value)} />
                                    <small class="text-muted">Example: https://play.google.com/apps/testingcom.example.app</small>
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Enter your .apk file </label>
                                    <br />
                                    {update_apk_file ? '' : <>
                                        <a download={apk_file} href={import.meta.env.VITE_BACKEND_URL + "/" + apk_file}>
                                            <img src="/apk_common_icon.jpg" alt={apk_file} class="img-fluid" width="50" height="50" />
                                        </a>
                                        <br />
                                    </>}
                                    <p>{update_apk_file ? 'Your update apk: ' + update_apk_file.name : apk_file}</p>
                                    <label for="updateFileInput">Update APK File</label>
                                    <input type="file" id="updateFileInput" style={{ display: 'none' }} class="form-control bg-dark text-white" onChange={(e) => UpdateSetApk(e.target.files[0])} />

                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Enter app icon </label>
                                    <br />
                                    <img src={update_app_icon ? URL.createObjectURL(update_app_icon) : import.meta.env.VITE_BACKEND_URL + "/" + app_icon} alt="" class="img-fluid" width="50" height="50" />
                                    <br /><br />
                                    <label for="updateFileInput2">Update App Image</label>
                                    <input type="file" id="updateFileInput2" style={{ display: 'none' }} class="form-control bg-dark text-white" onChange={(e) => UpdateSetAppIcon(e.target.files[0])} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Additional Instructions (Optional)</label>
                                    <textarea class="form-control bg-dark text-white" rows="3" placeholder="Enter any specific testing instructions or requirements" value={addi_info} onChange={(e) => setAddiInfo(e.target.value)} ></textarea>
                                    <small class="text-muted">Help testers understand what to focus on</small>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <button type="button" class="btn btn-secondary">Back</button>
                                    <button type="submit" class="btn btn-custom">Continue <span class="text-success">&gt;</span></button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

