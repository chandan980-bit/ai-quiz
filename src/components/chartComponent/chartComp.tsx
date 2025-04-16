"use client"

import { Doughnut } from 'react-chartjs-2';
import {Chart, registerables } from 'chart.js'
import "./chartComponentStyle.scss"
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default function ChartComponent({ wrong, correct}:{
    wrong: number,
    correct: number
}) {

    Chart.register(...registerables,ChartDataLabels);

    return (
        <div className="chartComponent">
            <Doughnut
            data={
                {
                    labels: ["correct", "wrong"],
                    
                    datasets: [
                        {
                            label: "Problems",
                            data: [correct, wrong],
                            backgroundColor: [
                                "rgb(146, 94, 250)",
                                "rgb(255, 28, 104)",
                                // "rgb(255, 205, 86)",
                            ],
                            hoverOffset: 4,
                            
                        },
                    ],
                    
                }
            }
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: 'Problems Solved',
                        font:{
                            size: 24,
                            
                        },
                        color: "black"
                    },
                    datalabels:{
                        color: "#fff",
                        font: {
                            size: 18,
                            weight: "bold"
                        },
                    }
                }
            }}
            />
        </div>
    )
}