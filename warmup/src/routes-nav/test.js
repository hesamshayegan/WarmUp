
import React, { useState, useEffect } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries,
  FlexibleWidthXYPlot,
  FlexibleHeightXYPlot,
  FlexibleXYPlot,
  Hint
} from "react-vis";
// import { Motion, spring } from "react-motion";
// In your render...

// const greenData = [
//   { x: "A", y: 0 },
//   { x: "B", y: 0 },
//   { x: "C", y: 0 },
//   { x: "L", y: 0 },
//   { x: "K", y: 0 },
//   { x: "D", y: 0 },
//   { x: "E", y: 0 },
//   { x: "G", y: 0 },
//   { x: "H", y: 0 },
//   { x: "N", y: 0 }
// ];

// const blueData = [
//   { x: "A", y: 0 },
//   { x: "B", y: 0 },
//   { x: "C", y: 0 },
//   { x: "L", y: 0 },
//   { x: "K", y: 0 },
//   { x: "D", y: 0 },
//   { x: "E", y: 0 },
//   { x: "G", y: 0 },
//   { x: "H", y: 0 },
//   { x: "N", y: 0 }
// ];

// const labelData = greenData.map((d, idx) => ({
//   x: d.x,
//   y: Math.max(greenData[idx].y, blueData[idx].y)
// }));

// const X = props => {
//   return (
//     <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
//       {value => <div>{value.x}</div>}
//     </Motion>
//   );
// };
const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2}
];

const defaultProps = {
  margin: {top: 10, left: 10, right: 10, bottom: 10}
};



function Test ({height, width}) {

  const [hoveredCell, setHoveredCell] = useState(null);
  
  const handleMouseOver = value => {
    setHoveredCell(value);
  };
  
  const handleMouseOut = () => {
    setHoveredCell(null);
  };

  return (
  <div>
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        // position: 'relative',
        width: width || '30vw',
        height: height || '50vh'
      }}
    >
      {/* <div
        className="flexible-width"
        style={{width: '30%', height: '100%', border: '1px solid #ccc'}}
      >
        <FlexibleWidthXYPlot {...defaultProps} height={100}>
          <VerticalBarSeries data={data} />
        </FlexibleWidthXYPlot>
      </div>
      <div
        className="flexible-height"
        style={{width: '30%', height: '100%', border: '1px solid #ccc'}}
      >
        <FlexibleHeightXYPlot {...defaultProps} width={100}>
          <VerticalBarSeries data={data} />
        </FlexibleHeightXYPlot>
      </div> */}
      <div
        className="flexible-vis"
        style={{width: '100%', height: '100%', border: '1px solid red'}}
      >
        <FlexibleXYPlot {...defaultProps} width={100}>
          <VerticalBarSeries
            onValueMouseOver={handleMouseOver}
            onValueMouseOut={handleMouseOut}            
            data={data}                         
          />
          {hoveredCell && (
          <Hint value={hoveredCell}>            
            <div>
              <p>{hoveredCell.x}</p>             
            </div>
          </Hint>
        )}
          {console.log(hoveredCell)}
        </FlexibleXYPlot>
      </div>
    </div>
  </div>
  )
}

export default Test;

// const greenData = [
//   { x: "A", y: 0 },
//   { x: "B", y: 0 },
//   { x: "C", y: 0 },
//   { x: "L", y: 0 },
//   { x: "K", y: 0 },
//   { x: "D", y: 0 },
//   { x: "E", y: 0 },
//   { x: "G", y: 0 },
//   { x: "H", y: 0 },
//   { x: "N", y: 0 }
// ];

// const blueData = [
//   { x: "A", y: 0 },
//   { x: "B", y: 0 },
//   { x: "C", y: 0 },
//   { x: "L", y: 0 },
//   { x: "K", y: 0 },
//   { x: "D", y: 0 },
//   { x: "E", y: 0 },
//   { x: "G", y: 0 },
//   { x: "H", y: 0 },
//   { x: "N", y: 0 }
// ];

// const labelData = greenData.map((d, idx) => ({
//   x: d.x,
//   y: Math.max(greenData[idx].y, blueData[idx].y)
// }));

// // const X = props => {
// //   return (
// //     <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
// //       {value => <div>{value.x}</div>}
// //     </Motion>
// //   );
// // };
// export default function Test(props) {
//   const [gData, setGreenData] = useState(greenData);
//   const [bData, setBlueData] = useState(blueData);

//   useEffect(() => {
//     setTimeout(() => {
//       setGreenData([
//         { x: "A", y: 9 },
//         { x: "B", y: 11 },
//         { x: "C", y: 20 },
//         { x: "L", y: 24 },
//         { x: "K", y: 7 },
//         { x: "D", y: 8 },
//         { x: "E", y: 22 },
//         { x: "G", y: 2 },
//         { x: "H", y: 9 },
//         { x: "N", y: 4 }
//       ]);
//     }, 20);
//     setBlueData([
//       { x: "A", y: 20 },
//       { x: "B", y: 21 },
//       { x: "C", y: 10 },
//       { x: "L", y: 14 },
//       { x: "K", y: 3 },
//       { x: "D", y: 8 },
//       { x: "E", y: 20 },
//       { x: "G", y: 2 },
//       { x: "H", y: 9 },
//       { x: "N", y: 9 }
//     ]);
//   }, []);

//   const BarSeries = VerticalBarSeries;
//   return (
//     <div>
//       <XYPlot xType="ordinal" width={700} height={300} xDistance={100}>
//         <VerticalGridLines />
//         <HorizontalGridLines />
//         <XAxis />
//         <YAxis />
//         <BarSeries
//           className="vertical-bar-series-example"
//           data={gData}
//           animation={{ damping: 10, stiffness: 20 }}
//         />
//         <BarSeries data={bData} animation={{ damping: 50, stiffness: 1000 }} />
//         <LabelSeries data={labelData} getLabel={d => d.x} animation />
//       </XYPlot>
//     </div>
//   );
// }
