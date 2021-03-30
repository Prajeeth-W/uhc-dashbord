import React, { Component } from 'react';
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2';
import './chartBg.css';

export default class PieChart extends Component {
    constructor (props){
        super(props);
        this.state = { chartData : props.chartData} 
    }

    render() {
        return (
            <div  >
                <Doughnut
                    data={this.state.chartData}
                    width={100}
                    height={250}
                    
                    options={ 
                        {
                            title:{
                                display:true,
                                text:'Test - D/nut Chart ',
                                fontSize:15
                                },
                                animation: {
                                    animateScale: true,
                                    animateRotate: true
                                },
                                responsive: true,
                                maintainAspectRatio: false,
                                
                                legend: {
                                    position: 'right',
                                    labels:{
                                    boxWidth: 10,
                                    padding: 12
                                    }
                                }

                        }
                    }                
                />                
            </div>
        )
    }
}
