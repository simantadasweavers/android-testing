import { Sidebar } from "../../components/admin/Sidebar"
import { Link } from "react-router-dom"
import video from '/src/assets/videos/testing.mp4';

export const SubmitApp = () => {
    return (
        <>
            <title>Submit App</title>

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
                                <div class="step"><span>📋</span></div>
                                <span>Setup Guide <small>Step 1</small></span>
                            </div>
                            <div class="step-card d-flex align-items-center">
                                <div class="step"><span>⚡</span></div>
                                <span>App Details <small>Step 2</small></span>
                            </div>
                            <div class="step-card d-flex align-items-center">
                                <div class="step"><span>✔</span></div>
                                <span>Review & Submit <small>Step 3</small></span>
                            </div>
                        </div>
                        <div class="step-card mb-4">
                            <h3>Getting Started</h3>
                            <p>Follow these steps to set up your app in Google Play Console for testing.</p>
                            <div class="text-center mt-4">
                                <button class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#videoModal">▶ Watch Video Guide</button>
                                <p class="mt-2">Learn how to set up your app in 2 minutes <small>(2 min tutorial)</small></p>
                                <p>or follow written instructions</p>
                            </div>
                        </div>
                        <div class="step-card">
                            <h3>4 Simple Steps to Get Started</h3>
                            <p>Complete these steps in Google Play Console</p>
                            <div class="row mt-4">
                                <div class="col-md-6 mb-3">
                                    <div class="step-card p-3">
                                        <div class="step">01</div>
                                        <span>Add Testers Group</span>
                                        <p>Add our testers google group to your app's closed testing track</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="step-card p-3">
                                        <div class="step">02</div>
                                        <span>Enable Global Testing</span>
                                        <p>Select all countries to allow our testers to access your app</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="step-card p-3">
                                        <div class="step">03</div>
                                        <span>Submit for Review</span>
                                        <p>Send the changes to review - typically approved within 30-60 minutes</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="step-card p-3">
                                        <div class="step">04</div>
                                        <span>Activate Testing</span>
                                        <p>Once approved, publish your changes to start the testing process</p>
                                    </div>
                                </div>
                            </div>
                            <p class="highlight">Need help? Contact our support team!</p>
                            <Link to="/admin/app-details" class="btn btn-custom mt-3" style={{ color: 'black' }}>
                                Continue to App Details
                            </Link>

                        </div>
                    </div>


                </div>
            </div>


            {/* video modal */}
            <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel" style={{ color: 'black' }}>Watch Video Guide</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body container">
                            <div class="embed-responsive embed-responsive-16by9">
                                <video class="embed-responsive-item" controls width="400" height="400">
                                    <source src={video} type="video/mp4" />
                                </video>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
