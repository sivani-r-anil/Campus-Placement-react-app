import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewRegistration = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

    return (
        <div>
            <h2 style={{ color: "#6A1B9A", textAlign: "center", fontFamily: "Montserrat" }}>
                📚 VIEW ALL REGISTRATIONS</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Registration Number</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Branch</th>
                        <th scope="col">SSLC Mark</th>
                        <th scope="col">Plus Two Mark</th>
                        <th scope="col">UG Mark</th>
                        <th scope="col">PG Mark</th>

                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <th scope="row">{data.regNo}</th>
                                    <td>{data.fullName}</td>
                                    <td>{data.branch}</td>
                                    <td>{data.sslcMark}</td>
                                    <td>{data.plusTwoMark}</td>
                                    <td>{data.ugMark}</td>
                                    <td>{data.pgMark}</td>
                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>


        </div>
    )
}

export default ViewRegistration