import { useLocation } from "react-router"
import { Sidebar } from "../components/Sidebar";
import { useEffect, useState } from "react";
import Axios from "../Auth/Axios";
import { useNavigate } from "react-router";


export const AssignTester = () => {
  const location = useLocation();
  const app_id = location.state;
  const navigate = useNavigate();
  const [app_detail, setAppDetail] = useState({});
  const [user, setUser] = useState({});
  const [tester_id, setTester] = useState(null);
  const [assigned_tester, setAssignTester] = useState(null);

  useEffect(() => {
    Axios({
      url: `${import.meta.env.VITE_BACKEND_URL}/admin/app_detail`,
      method: 'post',
      data: { app_id: app_id },
    })
      .then((res) => {
        setAppDetail(res.data.app);
        setUser(res.data.user);
        if(res.data.app.tester_id){
         setAssignTester(res.data.app.tester_id.first_name+" "+res.data.app.tester_id.last_name); 
        } 
      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  let status = null;
  if (app_detail.status == "approval") {
    status = "Waiting For Approval";
  }
  else if (app_detail.status == "progress") {
    status = "In progress";
  }
  else if (app_detail.status == "ready") {
    status = "Ready for live";
  }


  function handleSubmit(event) {
    event.preventDefault();

      Axios({
        url: `${import.meta.env.VITE_BACKEND_URL}/admin/tester/assign`,
        method: 'post',
        data: {
          "app_id": app_id,
          "tester_id": tester_id
        },
      })
      .then((res) => {
        Swal.fire({
          title: res.data.result,
          icon: "success"
        });
        navigate("/apps");
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return (
    <>
      <Sidebar />

      <div className="content-wrapper">
        <div className="page-content fade-in-up">

          <div className="row">
            <div className="col-lg-12">

              <form onSubmit={handleSubmit}>
                <div class="card text-white bg-dark mb-3">
                  <div class="card-header">App Deatils</div>
                  <div class="card-body">
                    <h5 class="card-title">App Name</h5>
                    <p class="card-text">{app_detail.app_name}</p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Google Play URL</h5>
                    <p class="card-text">
                      <a href={app_detail.google_play_url} style={{ color: 'white' }} target="_blank">
                        {app_detail.google_play_url}
                      </a>
                    </p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">App Image</h5>
                    <p class="card-text">
                      <img src={import.meta.env.VITE_BACKEND_URL + "/" + app_detail.apk_image} alt="" class="img-fluid" style={{ height: '50px', width: '50px' }} />
                    </p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Additional Info</h5>
                    <p class="card-text">{app_detail.additional_info}</p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">App Status</h5>
                    <p class="card-text">{status}</p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">App Submission Date</h5>
                    <p class="card-text">{app_detail.date}</p>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">App File</h5>
                    <p class="card-text">
                      <a href={import.meta.env.VITE_BACKEND_URL + "/" + app_detail.apk_file}>
                        <button type="button" class="btn btn-success">Download .apk</button>
                      </a>
                    </p>
                  </div>

                  {assigned_tester ? <>
                  <div class="card-body">
                    <h5 class="card-title">Assign Tester</h5>
                    <p class="card-text">{assigned_tester}</p>
                  </div>
                  </> : ''}
                  
                </div>
                <div class="mb-3">
                  <label for="select-tester" class="form-label">Select Tester</label>
                  <select class="form-select" id="select-tester" aria-label="Choose app tester" onChange={(e) => setTester(e.target.value)} required>
                    <option value="">Select Tester</option>
                    {user.length ? user.map((x, y) => {
                      return (
                        <option key={x._id + x.first_name} value={x._id}>{x.first_name + " " + x.last_name}</option>
                      )
                    }) : ''}
                  </select>
                </div>
                <button type="submit" class={assigned_tester ? "btn btn-warning" : "btn btn-primary" }>
                  {assigned_tester ? "Re-Assign" : "Assign" }
                </button>
              </form>

            </div>
          </div>

          <br />
          <br />
          <br />

          <div className="row">
            <div className="col-lg-12">
              <h4 class="text-center">Custom Message To Customer</h4>
              <form>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Subject</label>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your subject" />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Email Body</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
