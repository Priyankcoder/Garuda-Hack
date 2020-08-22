import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

const url = "https://grudahacks.herokuapp.com/api/question"
const Qna = () => {
    const [ques, setQues] = useState(null);
    useEffect(()=>{
        const fdsf = async()=>{
            try{
                const {data} = await axios.get(`${url}`); 
                console.log(data)
                const page = data.map((item) => (
                    <div>
                        <Card style={{ width: '80vw', marginBottom: "10vh" }}>
                            {/* <Card.Img variant="top" src={item.urlToImage} /> */}
                            <Card.Body>
                                <Card.Title >{item.question}</Card.Title>
                                {item.status == "Answered" ? <Badge pill variant="success">
                                answer
                                </Badge> : <Badge pill variant="warning">
                                    pending
                                </Badge>}
                                <Card.Text>
                                    {item.status == "Answered"? item.answer:""}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                ))
                setQues(page);
            }
            catch(error){
                console.log(error);
            }
        }
        fdsf();
        // console.log(data);
    }, [])
    
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "60px"}}>
            {ques}
        </div>
    ) 
}

export default Qna;