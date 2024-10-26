import React from 'react';

function Bars(props) {
    const { data, xScale, yScale, height, hoveredStation, onMouseEnter, onMouseOut } = props;

    const getColor = (station, selectedStation) => {
        return station === selectedStation ? 'red' : 'steelblue';
    };

    if (data) {
        return <g>
                {data.map((d, i) => (
                    <rect
                        key={i}
                        x={xScale(d.station)}
                        y={yScale(d.start)} 
                        width={xScale.bandwidth()}
                        height={height - yScale(d.start)}
                        fill={getColor(d.station, hoveredStation)}
                        stroke="black" 
                        strokeWidth={1} 
                        onMouseEnter={() => onMouseEnter(d.station)}
                        onMouseOut={onMouseOut}
                        style={{ transition: 'fill 0.2s' }} 
                    />
                ))}
            </g>
    } else {
        return <g></g>;
    }
}

export default Bars;