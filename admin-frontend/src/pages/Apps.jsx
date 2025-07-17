import { Sidebar } from "../components/Sidebar"

export const Apps = () => {
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
                                        <th scope="col">Status</th>
                                        <th scope="col">Tester</th>
                                        <th scope="col">Assigned Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    
                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
