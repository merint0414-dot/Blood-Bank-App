import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <h1 className="text-danger">
                            Blood Bank Management System
                        </h1>

                        <p className="mt-3 fs-5">
                            Welcome to the Blood Bank Management Application.
                        </p>

                        <p>
                            Use the navigation bar to add new donors and view all registered donors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home