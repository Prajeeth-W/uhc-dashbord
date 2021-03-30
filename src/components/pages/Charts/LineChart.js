import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';

export default class LineChart extends Component {
    constructor (props){
        super(props);
        this.state = { chartData : props.chartData} 
    }
   
    render() {
        return (
            <div>
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={250}
                    
                    options={
                        { 
                            title:{
                            display:true,
                            text:'Test - Line Chart ',
                            fontSize:15
                            },
                            
                            responsive: true, // Instruct chart js to respond nicely.
                            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height    
                        }
                    }
                />
            </div>
        )
    }
}
