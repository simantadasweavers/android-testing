import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "../Auth/Axios"
import { currentDateTime } from "../Helpers/Date"


export const PaySuccess = () => {
  const [pay_id, setPayId] = useState(null);

  useEffect(() => {
    setPayId(localStorage.getItem('pay_id'));

    axios({
      method: "POST",
      url: '/user/update-checkout-session',
      data: {
        pay_id: localStorage.getItem('pay_id'),
        pay_time: currentDateTime,
      }
    })
      .then((res) => {
        localStorage.removeItem('pay_id');
        localStorage.removeItem('payment_intent_id');
      })
      .catch((err) => {
        console.error(err);
      })

  }, [])


  return (
    <>
      <Header />

      <br />
      <br />


      <div class="container">

        <h2>Payment Complete</h2>
        <br />
        <h5>Payment ID: {pay_id} </h5>

        <br />
        <br />

        <Link class="btn btn-primary" to="/admin/dashboard">Go To Dashboard</Link>

      </div>


      <br />
      <br />

      <Footer />

    </>
  )
}
