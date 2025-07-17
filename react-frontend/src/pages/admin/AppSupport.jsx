import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/admin/Sidebar"
import { FinalApp } from "./FinalApp";

export const AppSupport = () => {

    return (
        <>

            <title>App Support</title>

            <div class="container-fluid">
                <div class="row">
                    <Sidebar />

                    <div class="col-md-10 p-4">
                        <h1>Submit Your App <span class="text-success">Get your app tested by 25 professional testers in 14 days</span></h1>
                        <div class="step-card">
                            <h3>App Details</h3>
                            <p>Provide the basic information about your app.</p>
                            <br />
                            <p>
                                <b>1. App Submission</b> you first buy the credits to submit the app to the tester. 
                            </p>
                            <p>
                                <b>2. Waiting for approval</b> we should wait for tester approval to start testing.
                            </p>
                            <p>
                                <b>3. In progress</b> This app will ready to test by testers for 14 days. And you will get message timely about app status.
                            </p>
                            <p>
                                <b>4. Completed</b> This means this app complete it's testing process and live to play store.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

