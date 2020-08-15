import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const Ask = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", marginRight: "auto", marginLeft: "auto", marginTop: "60px", border: "solid 1px grey", width: "fit-content", padding: "20px", borderRadius: "10px"}}>
            <Form style = {{height: "60vh", marginTop: "5vh"}}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ask Your Question</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Ask