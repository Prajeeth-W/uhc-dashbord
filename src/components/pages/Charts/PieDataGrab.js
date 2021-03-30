import React, { Component } from 'react'
import PieChart from './PieChart'
import './chartBg.css';

export default class PieDataGrab extends Component {
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
                    labels: ["Lorem 1", "Lorem 2", "Lorem 3", "Lorem 4", "Lorem 5", "Lorem 6"],
                    datasets: [{
                        label: "Test",
                        data: [47, 19, 71, 51, 22, 19],
                        backgroundColor: [
                        'rgba(255, 153, 102, 1)',
                        'rgba(198, 201, 202, 1)',
                        'rgba(128, 116, 110, 1)',
                        'rgba(42, 210, 201, 1)',
                        'rgba(97, 71, 103, 1)',
                        'rgba(95, 122, 118, 1)'
                        ],
                        borderColor: [
                        'rgba(255, 153, 102, 1)',
                        'rgba(198, 201, 202, 1)',
                        'rgba(128, 116, 110, 1)',
                        'rgba(42, 210, 201, 1)',
                        'rgba(97, 71, 103, 1)',
                        'rgba(95, 122, 118, 1)'
                            ],
                        borderWidth:[1]
                    }]
                }
            })
        }

        render() {
            return (
                <div className="wrapper" style={{backgroundColor:'white'}} >
                    <div className="canvas" >
                    <PieChart chartData={this.state.chartData}/>
                    </div>
                </div>
            )
        }
}
