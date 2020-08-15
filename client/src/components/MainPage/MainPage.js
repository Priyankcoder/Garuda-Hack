import React, {useState, useEffect} from 'react';
import Navbar from '../NavBar/NavBar'
import Chart from '../Chart/Chart'
import News from '../News/News'
import styles from './MainPage.module.css'

const MainPage = () => {
    const [auth, setAuth] = useState(false);
    return (
        <div style={{ width: "100%" }}>
            <div>
                <Navbar />
            </div>
            <div style = {{display:"flex", justifyContent: "flex-end", marginTop: "15vh"}}>
                <Chart />
            </div>
            <div>
                <News />
            </div>
        </div>
        

    )

}

export default MainPage

