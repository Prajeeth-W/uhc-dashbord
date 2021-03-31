import React from 'react';
import './chartBg.css';

import ChartDataGrab from './ChartDataGrab';
import LineDataGrab from './LineDataGrab';
import PieDataGrab from './PieDataGrab';

export const AllCharts = () => {
    return (
        <div className = "report">

            <div className = "all_chart"> 

                <div className = "all_charts__left">
                    <div className = "all_charts__left__title">
                        <div>
                            <h1>Lorem Ipsum - 1</h1>
                            <p>(description here-)</p>
                        </div>                        
                    </div>
                    <LineDataGrab/>
                </div>

                <div className = "all_charts__mid">
                    <div className = "all_charts__mid__title">
                        <div>
                            <h1>Lorem Ipsum - 2 </h1>
                            <p>-(description here-)</p>
                        </div>                        
                    </div>
                    <ChartDataGrab/>
                </div>

                <div className = "all_charts__right">
                    <div className = "all_charts__right__title">
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
