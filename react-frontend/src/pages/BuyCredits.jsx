import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "../Auth/Axios";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export const BuyCredits = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [person_name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [metadata, setMetadata] = useState();
  const [phone, setPhone] = useState();
  const [credit, setCredit] = useState(10);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: '/user/create-checkout-session',
      data: {
        fullname: person_name,
        email: email,
        credits: credit,
        phone: phone,
        address: address,
      }
    })
      .then((res) => {
        document.getElementById('pay_form').style.display = "none";
        console.warn("new payment id: " + res.data.pay._id);
        localStorage.setItem('pay_id', res.data.pay._id);
        localStorage.setItem('payment_intent_id', res.data.pay.stripe_intent_id);
        setClientSecret(res.data.checkoutSessionClientSecret);
      }).catch((err) => {
        console.error(err)
      })


  }


  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <Header />

      <br />
      <br />


      <div className="container" id="pay_form">
        <div className="row">
          <div className="col-5">
            <img src="/src/assets/images/buy_credits.jpg" alt="" class="img-fluid" />
          </div>
          <div className="col-1"></div>
          <div className="col-6">

            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="text" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="password" value={person_name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              </div>
              <div class="mb-3">
                <label for="credit" class="form-label">Enter credits</label>
                <input type="number" class="form-control" id="credit" aria-describedby="Enter your credit amount" value={credit} onChange={(e) => setCredit(e.target.value)} placeholder="Enter your credit amount" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" class="form-control" id="phone" aria-describedby="Enter your phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">Full Address</label>
                <textarea class="form-control" value={address} onChange={(e) => setAddress(e.target.value)} id="address" rows="4"></textarea>
              </div>
              <button type="submit" class="btn btn-custom btn-lg">Pay Now</button>
            </form>


          </div>
        </div>
      </div>

      <br />
      <br />
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      )}

      <br />
      <br />

      <Footer />

    </>
  );
};