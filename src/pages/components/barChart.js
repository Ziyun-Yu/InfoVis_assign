import React from 'react';
import Bars from './bars';
import YAxis from './yAxis';
import XAxis from './xAxis';

function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width, hoveredStation, onMouseEnter, onMouseOut} = props;

    return <g transform={`translate(${offsetX},${offsetY})`}>
        <Bars data={data} xScale={xScale} yScale={yScale} height={height} 
            hoveredStation={hoveredStation}
            onMouseEnter={onMouseEnter}
            onMouseOut={onMouseOut}/>
        <YAxis yScale={yScale} height={height} axisLabel={"Bikers start from"} />
        <XAxis xScale={xScale} height={height} width={width} />
        </g>
}

export default BarChart