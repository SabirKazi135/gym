import React from 'react';
import { View, Text, Dimensions, Pressable } from 'react-native';
import Svg, { 
    Line,
    Circle,
    Path,
    Text as SvgText,
    G,
    Rect
} from 'react-native-svg';
import { useState } from 'react';

export default function WeightProgressGraph({width} : {width: number}) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    // const { width } = Dimensions.get('window');
    const height = 260;

    type DataPoint = {
        label: string;
        value: number;
    };

    const data: DataPoint[] = [
        { label: "Week 1", value: 75 },
        { label: "Week 2", value: 73 },
        { label: "Week 3", value: 71 },
        { label: "Week 4", value: 69 },
        { label: "Week 5", value: 68 },
        { label: "Week 6", value: 67 },
    ];

    const paddingLeft = 50;
    const paddingRight = 30;
    const paddingTop = 20;
    const paddingBottom = 40;

    const graphWidth = width - paddingLeft - paddingRight;
    const graphHeight = height - paddingTop - paddingBottom;

    const rawMin = Math.min(...data.map(d => d.value));
    const rawMax = Math.max(...data.map(d => d.value));

    const range = rawMax - rawMin || 1;
    const paddingAmount = range * 0.5;

    const min = rawMin - paddingAmount;
    const max = rawMax + paddingAmount;

    const yScale = (value : number) => {
        return (
            paddingTop + graphHeight - ((value - min) / (max - min || 1)) * graphHeight
        )
    };

    const xScale = (index : number) => {
        return paddingLeft + (index / (data.length - 1)) * graphWidth;
    };

    const linePath = data.map((point, i) => {
        const x = xScale(i);
        const y = yScale(point.value);
        return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(" ");

    const numberOfSteps = 4

    const yLabels = Array.from({length: numberOfSteps + 1}, (_, i) => {
        const value = max - (i / numberOfSteps) * (max - min);
        const y = paddingTop + (i / numberOfSteps) * graphHeight;

        return {value, y}
    });

    const TOOLTIP_WIDTH = 120;
    const TOOLTIP_HEIGHT = 60;
    const TOOLTIP_MARGIN = 8;

    return (
        <Pressable onPress={(event) => {
            const touchX = event.nativeEvent.locationX;

            let closestIndex = 0;
            let smallestDistance = Infinity;

            data.forEach((_, i) => {
                const pointX = xScale(i)
                const distance = Math.abs(pointX - touchX);
                if(distance < smallestDistance){
                    smallestDistance = distance;
                    closestIndex = i
                }
            });
            setActiveIndex(closestIndex)
        }}>
            <Svg width={width} height={height}>

                <Line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={height - paddingBottom} stroke={"#AAAAAA"} strokeWidth={2} />
                <Line x1={paddingLeft} y1={height - paddingBottom} x2={width-paddingRight} y2={height - paddingBottom} stroke={"#AAAAAA"} strokeWidth={2} />

                {[0, 1, 2, 3, 4, 5].map(i => {
                    const y = paddingTop + (i / 4) * graphHeight;
                    const x = xScale(i);
                    return (
                        <React.Fragment key={i}>
                        {i === 4 ? null : (
                            <Line key={i} x1={paddingLeft} x2={width - paddingRight} y1={y} y2={y} stroke={"#E5E5E5"} strokeDasharray={"6 2"} strokeWidth={2}/>
                        )}
                         
                        {i % 2 === 0 ? "" : (
                            <Line
                            key={`v-grid-${i}`}
                            x1={x}
                            x2={x}
                            y1={paddingTop}
                            y2={height - paddingBottom}
                            strokeWidth={2}
                            stroke="#E5E5E5"
                            strokeDasharray="6 2"
                            
                        />
                        )}
                        </React.Fragment>
                    )
                })}

                <Path d={linePath} stroke={"#E67E22"} strokeWidth={3} fill={"none"} />

                {data.map((point, i) => {
                    const x = xScale(i);
                    const y = yScale(point.value);
                    return (
                        <React.Fragment key={i}>
                            {activeIndex === i && (
                                <Circle key={`active-${i}`} cx={x} cy={y} r={7} fill={"#A22E2E"} />
                            )}
                            <Circle key={i} cx={x} cy={y} r={5} fill={"#E67E22"} onPress={() => setActiveIndex(i)} />
                        </React.Fragment>
                    );
                })}

                {
                    yLabels.map((label, i) => (
                        <SvgText key={`y-label-${i}`}
                        x={paddingLeft - 20}
                        y={label.y + 4}
                        fontSize="12"
                        fill="#363636"
                        fontFamily='MontserratRegular'
                        textAnchor='end' >
                            {label.value.toFixed(0)}
                        </SvgText>
                    ))
                }

                {
                    yLabels.map((label, i) => (
                        <Line key={`y-markers-${i}`}
                        x1={paddingLeft - 8}
                        y1={label.y}
                        x2={paddingLeft}
                        y2={label.y}
                        stroke="#AAAAAA"
                        strokeWidth={2}
                        />
                    ))
                }

                {data.map((point, i) => {
                    const x = xScale(i);
                    if(i % 2 === 0) return null;
                    return (
                        <SvgText
                        key={`x-label-${i}`}
                        x={x}
                        y={height - paddingBottom + 20}
                        fontSize="12"
                        fill="#363636"
                        textAnchor="middle"
                        fontFamily='MontserratRegular'
                        >
                        {point.label}
                        </SvgText>
                    );
                })}

                {data.map((point, i) => {
                    const x = xScale(i);
                    if(i % 2 === 0) return null;
                    return (
                        <Line
                        key={`x-markers-${i}`}
                        x1={x}
                        x2={x}
                        y1={height - paddingBottom + 8}
                        y2={height - paddingBottom}
                        stroke="#AAAAAA"
                        strokeWidth={2}
                        />
                    );
                })}


                {activeIndex !== null && (() => {
                    const point = data[activeIndex];
                    const x = xScale(activeIndex);
                    const y = yScale(point.value);
                    let tooltipX = x - TOOLTIP_WIDTH / 2;
                    const minX = paddingLeft;
                    const maxX = width - paddingRight - TOOLTIP_WIDTH;

                    tooltipX = Math.max(minX, Math.min(tooltipX, maxX));

                    let tooltipY = y - TOOLTIP_HEIGHT - TOOLTIP_MARGIN;
                    if (tooltipY < paddingTop) {
                        tooltipY = y + TOOLTIP_MARGIN;
                    }
                    return (
                        <G>
                            <Rect x={tooltipX} y={tooltipY} width={TOOLTIP_WIDTH} height={TOOLTIP_HEIGHT} rx={4} fill="#fff" stroke="#aaa"/>
                            <SvgText x={tooltipX + TOOLTIP_WIDTH / 2} y={tooltipY + 22} fontSize="12" fill="#363636" textAnchor="end" fontFamily='MontserratRegular'>
                                {point.label}
                            </SvgText>
                            <SvgText x={tooltipX + TOOLTIP_WIDTH / 2} y={tooltipY + 40} fontSize="14" fill="#E37528" textAnchor="end" fontFamily='MontserratMedium'>
                                Weight:{point.value}
                            </SvgText>
                        </G>
                    );
                })()}
            </Svg>
        </Pressable>
    );
}