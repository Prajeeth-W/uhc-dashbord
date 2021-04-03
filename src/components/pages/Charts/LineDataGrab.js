import React, { Component } from 'react'
import LineChart from './LineChart'
import './chartBg.css';

export default class LineDataGrab extends Component {
    constructor(){
        super();
        this.state = {
          chartData:{}
        }
      }
    
      componentWillMount(){
          this.getChartData();
      }
    
      getChartData(){
        this.setState({ 
            chartData:{
             labels: ["x1",	"x2",	"x3",	"x4",	"x5",	"x6", "x7", "x8", "x9","x10"],
                datasets: [
                    {
                        label: 'Series 1', 
                        data: [500,	50,	2424,	14040,	14141,	4111,	4544,	47,	5555, 6811], 
                        fill:[false] ,
                        borderColor: ['blue'], 
                        backgroundColor: ['blue','blue','blue','blue','blue','blue','blue','blue','blue','blue'],                         
                        borderWidth: [1] 
                    },
                    {
                        label: 'Series 2', // Name the series
                        data: [200,	10,	4424,	11040,	11141,	7111,	1544,	77,	2555, 9811], // Specify the data values array
                        fill: [false],
                        borderColor: ['orange'], // Add custom color border (Line)
                        backgroundColor: ['orange','orange','orange','orange','orange','orange','orange','orange','orange','orange'], // Add custom color background (Points and Fill)
                        borderWidth: [1] // Specify bar border width
                    }
                ]
            }
        });
      }

    render() {
        return (
            <div className ="canvas2">
                <LineChart chartData={this.state.chartData}/>    
            </div>
        )
    }
}
