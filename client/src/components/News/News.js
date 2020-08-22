import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const News = () => {
    const [data, setData] = useState(null)
    const url = "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=9361906440a74781970aeea1cf2ef85c"
    let news;
    useEffect(() => {
        const fetchDailyData = async () => {

            try {
                const { data:{articles} } = await axios.get(`${url}`);
                // console.log(articles)
                news = articles.map((item) => 
                    (
                        <div>
                            <Card style={{ width: '80vw', marginBottom: "10vh" }}>
                                <Card.Img variant="top" src={item.urlToImage} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                    <Button variant="primary" href={item.url}>Read</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    )
                )
                setData(news);
                // console.log(news)
            } catch (error) {
                console.log(error);
            }
            
        };
        fetchDailyData();
    

    }, []);

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "60px"}}>
            {data}
        </div>
    )

}

export default News;
