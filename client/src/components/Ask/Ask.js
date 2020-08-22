import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Ask = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", marginRight: "auto", marginLeft: "auto", marginTop: "60px", border: "solid 1px grey", width: "fit-content", padding: "20px", borderRadius: "10px"}}>
            <Form style={{ height: "fit-content", marginTop: "5vh" }} method="POST" action = "https://grudahacks.herokuapp.com/api/question">
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name = "patient"/>
                </Form.Group>
                {/* <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  />
                    <Form.Text className="text-muted">
                        We'll update you soon with answer.
                    </Form.Text>
                </Form.Group> */}
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ask Your Question</Form.Label>
                    <Form.Control as="textarea" rows="3" name = "question"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Ask