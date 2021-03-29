import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

export default class Charts extends Component {
    constructor (props){
        super(props);
        this.state = { chartData : props.chartData} 
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
