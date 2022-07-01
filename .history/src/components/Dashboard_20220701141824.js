import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
    const [todos,setTodos]=useState([]);

    const handleChange = (e) => {
        console.log(e.target.id);
        onSnapshot(collection(db,'todos'),(snapshot)=>{
        snapshot.docs.map((doc) => { 
            console.log(doc.data())
        })
        })

    }

  return (
    <div>
        <br/>
        <br/>

        <Form className="container border">
            <br/>
            <br/>
            <Form.Group onChange={handleChange} className="mb-3" controlId="businessName">
                <Form.Label>Business Name</Form.Label>
                <Form.Control type="text" placeholder="Enter business name" />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="ownerName">
                <Form.Label>Owner Name</Form.Label>
                <Form.Control type="text" placeholder="Enter owner name" />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="url">
                <Form.Label>URL</Form.Label>
                <Form.Control type="text" placeholder="Enter URL" />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="phoneNumber">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="issues">
                <Form.Label>Issues</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Issues with website" />
            </Form.Group>
            <Form.Label>Answer</Form.Label>
            <div className="check-section">
                <Form.Group onChange={handleChange} className="mb-3" controlId="yes">
                    <Form.Check type="checkbox" label="yes" className="float-start" />
                </Form.Group>
                <Form.Group onChange={handleChange} className="mb-3" controlId="callback">
                    <Form.Check type="checkbox" label="callback" className="float-start" />
                </Form.Group>
                <Form.Group onChange={handleChange} className="mb-3" controlId="maybe">
                    <Form.Check type="checkbox" label="maybe" className="float-start" />
                </Form.Group>
                <Form.Group onChange={handleChange} className="mb-3" controlId="no">
                    <Form.Check type="checkbox" label="no" className="float-start" />
                </Form.Group>
                <Form.Group onChange={handleChange} className="mb-3" controlId="notAvailable">
                    <Form.Check type="checkbox" label="haven't called" className="float-start" />
                </Form.Group>
            </div>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <br/>
            <br/>
        </Form>

    </div>
  )
}

export default Dashboard