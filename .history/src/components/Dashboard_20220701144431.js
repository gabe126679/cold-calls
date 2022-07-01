import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { db } from '../firebase';
import { collection , onSnapshot, serverTimestamp, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
    const [todos, setTodos]=useState([]);
    const [businessName, setBusinessName]=useState("");
    const [ownerName, setOwnerName]=useState("");
    const [URL, setURL]=useState("");
    const [phone, setPhone]=useState("");
    const [issues, setIssues]=useState("");
    const [notes, setNotes]=useState("");
    const [answer, setAnswer]=useState("");

    const handleChange = (e) => {
        if (e.target.id === "businessName") {
            setBusinessName(e.target.value);
        }
        if (e.target.id === "ownerName") {
            setOwnerName(e.target.value);
        }
        if (e.target.id === "URL") {
            setURL(e.target.value);
        }
        if (e.target.id === "phone") {
            setPhone(e.target.value);
        }
        if (e.target.id === "issues") {
            setIssues(e.target.value);
        }
        if (e.target.id === "notes") {
            setNotes(e.target.value);
        }
        if (e.target.id === "yes") {
            setAnswer(e.target.id);
            console.log(answer)
        }
        if (e.target.id === "callback") {
            setAnswer(e.target.id);
            console.log(answer)
        }
        if (e.target.id === "maybe") {
            setAnswer(e.target.id);
            console.log(answer)
        }
        if (e.target.id === "no") {
            setAnswer(e.target.id);
            console.log(answer)
        }
        if (e.target.id === "haventCalled") {
            setAnswer(e.target.id);
            console.log(answer)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const stateObject = {
            businessName,
            ownerName,
            URL,
            phone,
            issues,
            notes,
            answer
        }
        const res = await db.collection('cities').add({
            name: 'Tokyo',
            country: 'Japan'
          });
          
          console.log('Added document with ID: ', res.id);
        console.log(stateObject);
        // onSnapshot(collection(db,'todos'),(snapshot)=>{
        //     snapshot.docs.map((doc) => { 
        //         console.log(doc.data())
        //     })
        // })

    }

  return (
    <div>
        <br/>
        <br/>

        <Form onSubmit={handleSubmit} className="container border">
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
            <Form.Group onChange={handleChange} className="mb-3" controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="issues">
                <Form.Label>Issues</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Issues with website" />
            </Form.Group>
            <Form.Group onChange={handleChange} className="mb-3" controlId="notes">
                <Form.Label>Issues</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Notes" />
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
                <Form.Group onChange={handleChange} className="mb-3" controlId="haventCalled">
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