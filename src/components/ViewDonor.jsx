import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'


const ViewDonor = () => {

    const [data, changeData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = () => {

        axios.get(
            "https://host-demo-app.onrender.com/api/donors"
        )
            .then((response) => {

                changeData(response.data)
                setLoading(false)

            })
            .catch((error) => {

                console.log(error)
                setLoading(false)

            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>

            <NavigationBar />

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-danger text-white text-center">
                        <h3>View All Donors</h3>
                    </div>

                    <div className="card-body">

                        {
                            loading ? (
                                <h4 className="text-center">
                                    Loading...
                                </h4>
                            ) : (
                                <div className="table-responsive">

                                    <table className="table table-bordered table-striped">

                                        <thead className="table-dark">
                                            <tr>
                                                <th>Name</th>
                                                <th>Age</th>
                                                <th>Gender</th>
                                                <th>Blood Group</th>
                                                <th>Phone</th>
                                                <th>City</th>
                                                <th>Weight (kg)</th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            {
                                                data.map((value, index) => (
                                                    <tr key={index}>
                                                        <td>{value.donor_name}</td>
                                                        <td>{value.age}</td>
                                                        <td>{value.gender}</td>
                                                        <td>{value.blood_group}</td>
                                                        <td>{value.phone}</td>
                                                        <td>{value.city}</td>
                                                        <td>{value.weight_kg}</td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>

                                    </table>

                                </div>
                            )
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewDonor