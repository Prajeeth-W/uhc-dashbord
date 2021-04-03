import React, { Component } from 'react'
import Charts from './Charts';
import './chartBg.css';

export default class ChartDataGrab extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
   // this.getchartData(); // this should be this.getChartData();
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ["course-1", 'course-2', 'course-3', 'course-4', 'course-5', 'course-6'],
        datasets:[
          {
            label:'No of Students',
            data:[
              217594,
              175451,
              178230,
              162519,
              119162,
              234567
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div  >   
        <div className ="canvas1">
          <Charts chartData={this.state.chartData} legendPosition="bottom"/>
        </div>     
      </div>
    );
  }
}
