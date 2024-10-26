import React, { useRef, useEffect } from 'react';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

function YAxis(props) {
    const { yScale, height, axisLabel } = props;

    if (yScale) {
        const axisRef = useRef(null);
        useEffect(() => {
            const axis = axisLeft(yScale);
            select(axisRef.current).call(axis);
        }, [yScale]);

    return <g>
            <g ref={axisRef}></g>
            <text style={{ textAnchor: 'end', fontSize: '15px' }} transform={`translate(20, 0) rotate(-90)`}>
                    {axisLabel}
            </text>
        </g>
}else {
    return <g></g>
}
}

export default YAxis
