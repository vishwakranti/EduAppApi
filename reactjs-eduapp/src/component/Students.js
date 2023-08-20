import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import useFetch from "../functions/useFetch";
export default function Students() {

    const [isLoaded, setIsLoaded] = useState(true);
    const [myData, setMyData] = useState([]);

    const { data, loading, error } = useFetch("http://localhost:5276/api/Student");
    return (
        <Container fluid>
            {loading && <div>Loading....{error}</div>}
            {data && (
                <div className="row p-2">
                    <h1>{" Students"}</h1>

                    {data.map((item) => (
                        <div className="col-md-4 p-2">
                            <div class="card p-2 m-4" style={{ width: '24rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">{item.firstName} {item.middleName} {item.lastName}</h5>
                                    <p className="card-text">Address: {item.address}</p>
                                    <p className="card-text">Gender: {item.gender}</p>
                                    <p className="card-text">Date of Birth: {item.dateofBirth}</p>
                                </div>
                            </div>
                            <p></p>
                        </div>
                    ))}

                </div>
            )}
        </Container>
    );
}