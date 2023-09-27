
import React, { useState, useEffect } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries
} from "react-vis";
// import { Motion, spring } from "react-motion";
// In your render...

const greenData = [
  { x: "A", y: 0 },
  { x: "B", y: 0 },
  { x: "C", y: 0 },
  { x: "L", y: 0 },
  { x: "K", y: 0 },
  { x: "D", y: 0 },
  { x: "E", y: 0 },
  { x: "G", y: 0 },
  { x: "H", y: 0 },
  { x: "N", y: 0 }
];

const blueData = [
  { x: "A", y: 0 },
  { x: "B", y: 0 },
  { x: "C", y: 0 },
  { x: "L", y: 0 },
  { x: "K", y: 0 },
  { x: "D", y: 0 },
  { x: "E", y: 0 },
  { x: "G", y: 0 },
  { x: "H", y: 0 },
  { x: "N", y: 0 }
];

const labelData = greenData.map((d, idx) => ({
  x: d.x,
  y: Math.max(greenData[idx].y, blueData[idx].y)
}));

// const X = props => {
//   return (
//     <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
//       {value => <div>{value.x}</div>}
//     </Motion>
//   );
// };
export default function Test(props) {
  const [gData, setGreenData] = useState(greenData);
  const [bData, setBlueData] = useState(blueData);

  useEffect(() => {
    setTimeout(() => {
      setGreenData([
        { x: "A", y: 9 },
        { x: "B", y: 11 },
        { x: "C", y: 20 },
        { x: "L", y: 24 },
        { x: "K", y: 7 },
        { x: "D", y: 8 },
        { x: "E", y: 22 },
        { x: "G", y: 2 },
        { x: "H", y: 9 },
        { x: "N", y: 4 }
      ]);
    }, 20);
    setBlueData([
      { x: "A", y: 20 },
      { x: "B", y: 21 },
      { x: "C", y: 10 },
      { x: "L", y: 14 },
      { x: "K", y: 3 },
      { x: "D", y: 8 },
      { x: "E", y: 20 },
      { x: "G", y: 2 },
      { x: "H", y: 9 },
      { x: "N", y: 9 }
    ]);
  }, []);

  const BarSeries = VerticalBarSeries;
  return (
    <div>
      <XYPlot xType="ordinal" width={700} height={300} xDistance={100}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <BarSeries
          className="vertical-bar-series-example"
          data={gData}
          animation={{ damping: 10, stiffness: 20 }}
        />
        <BarSeries data={bData} animation={{ damping: 50, stiffness: 1000 }} />
        <LabelSeries data={labelData} getLabel={d => d.x} animation />
      </XYPlot>
    </div>
  );
}


