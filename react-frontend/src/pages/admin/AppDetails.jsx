import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/admin/Sidebar"
import { FinalApp } from "./FinalApp";


export const AppDetails = () => {

    const [app_name, setAppName] = useState();
    const [google_play_url, setGooglePlayUrl] = useState();
    const [apk_file, setApk] = useState();
    const [app_icon, setAppIcon] = useState();
    const [addi_info, setAddiInfo] = useState();
    const navigate = useNavigate();

    const handleAppSubmit = (event) =>{
        event.preventDefault();
        const app_object = {
            "app_name": app_name,
            "play_url": google_play_url,
            "icon": app_icon,
            "apk": apk_file,
            "addi_info": addi_info
        }
      
        navigate("/admin/final-app", {state: app_object });
    }

    return (
        <>

            <title>Enter App Details</title>

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
                                    <label class="form-label">App Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control bg-dark text-white" placeholder="Enter your app name" value={app_name} onChange={(e)=>setAppName(e.target.value)} />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Testing URL <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control bg-dark text-white" placeholder="Enter Google Play testing URL" value={google_play_url} onChange={(e)=>setGooglePlayUrl(e.target.value)} />
                                    <small class="text-muted">Example: https://play.google.com/apps/testingcom.example.app</small>
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Enter your .apk file <span class="text-danger">*</span></label>
                                    <input class="form-control bg-dark text-white" type="file" id="formFile" accept=".apk" onChange={(e)=>setApk(e.target.files[0])} required />
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Enter app icon <span class="text-danger">*</span></label>
                                    <input class="form-control bg-dark text-white" type="file" id="formFile" accept="image/png, image/jpg, image/jpeg, image/webp, image/svg" onChange={(e)=>setAppIcon(e.target.files[0])} required />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Additional Instructions (Optional)</label>
                                    <textarea class="form-control bg-dark text-white" rows="3" placeholder="Enter any specific testing instructions or requirements" onChange={(e)=>setAddiInfo(e.target.value)} ></textarea>
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
