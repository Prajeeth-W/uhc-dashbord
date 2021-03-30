import React from 'react';
import ChartDataGrab from './ChartDataGrab';
import LineDataGrab from './LineDataGrab';
import PieDataGrab from './PieDataGrab';

export const AllCharts = () => {
    return (
        <div>
            <LineDataGrab/>
            <ChartDataGrab/>
            <PieDataGrab/>
        </div>
    )
}

export default AllCharts;
