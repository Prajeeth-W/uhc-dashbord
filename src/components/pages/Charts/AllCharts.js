import React from 'react';
import './chartBg.css';

import ChartDataGrab from './ChartDataGrab';
import LineDataGrab from './LineDataGrab';
import PieDataGrab from './PieDataGrab';


export const AllCharts = () => {   

    function onMenuClick (){
        console.log('(intended to call a function in the chart data component)')
    }

    return (
        <div className = "report">
            <div class="ui compact menu">
                <div class="ui simple dropdown item">
                    Dropdown 1
                    <i class="dropdown icon"></i>
                    <div class="menu">
                    <div class="item" onClick={onMenuClick}>Lorem 1</div>
                    <div class="item" onClick={onMenuClick}>Lorem 2</div>
                    <div class="item" onClick={onMenuClick}>Lorem 3</div>
                    
                    </div>
                </div>

                <div class="ui simple dropdown item">
                    Dropdown 2
                    <i class="dropdown icon"></i>
                    <div class="menu">
                    <div class="item" onClick={onMenuClick}>Choice 1</div>
                    <div class="item" onClick={onMenuClick}>Choice 2</div>
                    <div class="item" onClick={onMenuClick}>Choice 3</div>
                    </div>
                </div>
            </div> 

            <div className = "all_chart"> 
            
                <div className = "chart"> 
                    <div className = "all_charts__line">
                        <div className = "all_charts__line__title">
                            <div>
                                <h1>Lorem Ipsum - 1</h1>
                                <p>(description here-)</p>
                            </div>                        
                        </div>
                        <LineDataGrab/>
                    </div>
                </div>    

                <div className = "chart"> 
                    <div className = "all_charts__bar">
                        <div className = "all_charts__bar__title">
                            <div>
                                <h1>Lorem Ipsum - 2 </h1>
                                <p>(description here-)</p>
                            </div>                        
                        </div>
                        <ChartDataGrab/>
                    </div>
                </div>

                <div className = "chart"> 
                    <div className = "all_charts__pie">
                        <div className = "all_charts__pie__title">
                            <div>
                                <h1>Lorem Ipsum - 3</h1>
                                <p>(description here-)</p>
                            </div>                        
                        </div>
                        <PieDataGrab/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllCharts;
