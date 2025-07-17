import { Sidebar } from "../components/Sidebar"

export const AddUser = () => {
    return (
        <>

            <Sidebar />

            <div className="content-wrapper">
                <div className="page-content fade-in-up">

                    <div className="row">
                        <div className="col-lg-12">

                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">First Name</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" class="btn btn-primary">Create User</button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}
