
import React from 'react';

function Points(props) {
    const { data, xScale, yScale, height, width, hoveredStation, setTooltipData, setTooltipPos, onMouseEnter } = props;

    const getColor = (selectedStation, station) => {
        return station === selectedStation ? 'red' : 'steelblue';
    };

    const getRadius = (selectedStation, station) => {
        return station === selectedStation ? 10 : 5;
    };

    const handleMouseEnter = (dataPoint, event) => {
        setTooltipData(dataPoint);
        setTooltipPos({ x: event.pageX, y: event.pageY });
        onMouseEnter(dataPoint.station);
    };

    const handleMouseOut = () => {
        setTooltipData(null);
    };

    const handleHighlightedMouseOut = () => {
        handleMouseOut();
        onMouseEnter(null);
    };

    React.useEffect(() => {
        if (hoveredStation) {
            const dataPoint = data.find(d => d.station === hoveredStation);
            if (dataPoint) {
                setTooltipData(dataPoint);
                setTooltipPos({x: event.pageX, y: event.pageY });
            } else {
                setTooltipData(null);
            }
        }
    }, [hoveredStation, data, setTooltipData, setTooltipPos, event]);

    if (data) {
        return <g>
                {data.map((d, i) => (
                    <circle
                        key={i}
                        cx={xScale(d.tripdurationS)} 
                        cy={yScale(d.tripdurationE)}
                        r={getRadius(hoveredStation, d.station)}
                        fill={getColor(hoveredStation, d.station)}
                        stroke="black"
                        strokeWidth={1}
                        onMouseEnter={(event) => handleMouseEnter(d, event)}
                        onMouseOut={handleMouseOut}
                        style={{ transition: 'fill 0.2s, r 0.2s' }}
                    />
                ))}
                {hoveredStation && (
                    <rect
                        x={0}
                        y={0}
                        width={width}
                        height={height}
                        fill="yellow"
                        opacity={0.5}
                    />
                )}
                {hoveredStation && data.map((d, i) => {
                    if (d.station === hoveredStation) {
                        return (
                            <circle
                                key={`hovered-${i}`}
                                cx={xScale(d.tripdurationS)}
                                cy={yScale(d.tripdurationE)}
                                r={getRadius(hoveredStation, d.station)}
                                fill={getColor(hoveredStation, d.station)}
                                stroke="black"
                                strokeWidth={1}
                                style={{ transition: 'fill 0.2s, r 0.2s' }}
                                onMouseOut={handleHighlightedMouseOut}
                                onMouseEnter={(event) => handleMouseEnter(d, event)}
                            />
                        );
                    }
                    return null
                })}
            </g>
    } else {
        return <g></g>;
    }
}

export default Points