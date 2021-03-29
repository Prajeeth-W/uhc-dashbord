import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

export default class Charts extends Component {
    constructor (props){
        super(props);
        this.state = { chartData : props.chartData
            // labels :['Course-1','Course-2','Course-3','Course-4','Course-5','Course-6' ],
            // datasets:[{
            //     label:'No of Students',
            //     data :[1111,2222,3333,1444,4555,2266],
            //     backgroundColor:['rgba(255, 99, 132, 0.6)',
            //     'rgba(54, 162, 235, 0.6)',
            //     'rgba(255, 206, 86, 0.6)',
            //     'rgba(75, 192, 192, 0.6)',
            //     'rgba(153, 102, 255, 0.6)',
            //     'rgba(255, 159, 64, 0.6)',
            //     'rgba(255, 99, 132, 0.6)']
            // }]
        } 
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'bottom'        
      }

    render() {
        return (
            <div>                
                <Bar
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    backgroundColor = 'rgb(100,0,0)' // <<= cannot fix yet
                    options={
                        { 
                            title:{
                            display:this.props.displayTitle,
                            text:'Number of Enrolled Students',
                            fontSize:15
                            },
                            legend:{
                            display:this.props.displayLegend,
                            position: this.props.legendPosition
                            } 
                        }
                    }
                />
            </div>
        )
    }
}
