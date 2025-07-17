import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Home = () => {
    return (
        <>
        <Header />
          
            <div className="hero">
                <div className="container hero-content">
                    <h1 className="main-title">Get Your App Tested & Published</h1>
                    <p className="sub-title">Get 12 testers for Google Play production access - faster, smoother, and without hassle.</p>
                    <a href="#how-it-works" className="btn btn-custom btn-lg">How It Works</a>
                    <a href="/buy-credits" className="btn btn-custom btn-lg">Buy for $5/₹428 inr.</a>
                </div>
            </div>

            <div className="impact" id="impact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">99% <br /> Production Success Rate</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">10+ <br /> Apps Published</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">75+ <br /> Countries Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testing-package" id="testing-package">
                <div className="container">
                    <h2 className="section-title">Complete Testing Package</h2>
                    <p>Everything you need to get your app approved by Google Play, with our production access guarantee for ₹999</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card card-package">
                                <h5>Production Access Guarantee</h5>
                                <p>Full control of your app, approved within hours.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-package">
                                <h5>25 Qualified Testers</h5>
                                <p>Expert testers assigned within 6 hours.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-package">
                                <h5>Detailed Feedback Report</h5>
                                <p>Comprehensive testing report.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-package">
                                <h5>Production Access Report</h5>
                                <p>Pre-final test for approval.</p>
                            </div>
                        </div>
                    </div>
                    <a href="/register" className="btn btn-custom mt-3">Get Started Today</a>
                </div>
            </div>

            <div className="process" id="how-it-works">
                <div className="container">
                    <h2 className="section-title">Simple Process, Powerful Results</h2>
                    <p>Our streamlined process helps developers meet Google’s requirements quickly and efficiently.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card process-step">
                                <h5>1. Pay 5$/₹428</h5>
                                <p>Make a one-time payment to access our services.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card process-step">
                                <h5>2. Get 25 Testers</h5>
                                <p>Assigned within 6 hours of payment.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card process-step">
                                <h5>3. 14-Day Testing</h5>
                                <p>Track progress and get feedback.</p>
                            </div>
                        </div>
                    </div>
                    <a href="/register" className="btn btn-custom mt-3">Get Started Now</a>
                </div>
            </div>

            <div className="testimonials" id="community">
                <div className="container">
                    <h2 className="section-title">Trusted by Developers</h2>
                    <p>We’ve helped over 2000 developers get their apps approved on Google Play.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>"Smooth process & production access!" - John Doe</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>"Highly recommended!" - Jane Smith</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <p>"Great support!" - Alex Brown</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faq" id="faq">
                <div className="container">
                    <h2 className="section-title">Everything About 12 Testers & App Publishing</h2>
                    <p>Quick answers to the most common questions developers ask about getting published on Google Play.</p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <p>What if I don’t pass the testing?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <p>How long does it take to complete testing?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center py-5">
                <h2 className="section-title">Ready to Meet Google Play’s Requirements?</h2>
                <p>Get 12 testers and production access for just ₹999.</p>
                <a href="/register" className="btn btn-custom btn-lg">Start Testing Today</a>
            </div>

            <Footer />
        </>
    )
}
