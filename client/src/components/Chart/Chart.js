import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchData } from '../../api';

import styles from './Chart.module.css';

const Chart = () => {
    const [confirmed, setConfirmed] = useState({});
    const [recovered, setRecovered] = useState({});
    const [deaths, setDeaths] = useState({});


    useEffect(() => {
        const fetchMyAPI = async () => {
            const data = await fetchData();

            setConfirmed(data.confirmed);
            setRecovered(data.recovered);
            setDeaths(data.deaths);

        };

        fetchMyAPI();


    }, []);
    // console.log(confirmed.value);

    const barChart = 
        (
            (<Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [
                        {
                            label: 'People',
                            backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                            data: [confirmed.value, recovered.value, deaths.value],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in Indonesia` },
                }}
            />
        )
    );

    // const lineChart = (
    //     dailyData[0] ? (
    //         <Line
    //             data={{
    //                 labels: dailyData.map(({ date }) => date),
    //                 datasets: [{
    //                     data: dailyData.map((data) => data.confirmed),
    //                     label: 'Infected',
    //                     borderColor: '#3333ff',
    //                     fill: true,
    //                 }, {
    //                     data: dailyData.map((data) => data.deaths),
    //                     label: 'Deaths',
    //                     borderColor: 'red',
    //                     backgroundColor: 'rgba(255, 0, 0, 0.5)',
    //                     fill: true,
    //                 },
    //                 ],
    //             }}
    //         />
    //     ) : null
    // );

    return (
        <div style={{
            display: "flex",
            width: "90%",
            marginTop: "60px",
            marginLeft: "auto",
            marginRight: "auto"

        }}>
            {barChart}
        </div>
    );
}

export default Chart;