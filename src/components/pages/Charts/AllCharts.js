import React from 'react';
import './chartBg.css';

import ChartDataGrab from './ChartDataGrab';
import LineDataGrab from './LineDataGrab';
import PieDataGrab from './PieDataGrab';

export const AllCharts = () => {
    return (
        <div className = "report">

            <div className = "all_chart"> 

                <div className = "all_charts__line">
                    <div className = "all_charts__line__title">
                        <div>
                            <h1>Lorem Ipsum - 1</h1>
                            <p>(description here-)</p>
                        </div>                        
                    </div>
                    <LineDataGrab/>
                </div>

                <div className = "all_charts__bar">
                    <div className = "all_charts__bar__title">
                        <div>
                            <h1>Lorem Ipsum - 2 </h1>
                            <p>(description here-)</p>
                        </div>                        
                    </div>
                    <ChartDataGrab/>
                </div>

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
    )
}

export default AllCharts;
