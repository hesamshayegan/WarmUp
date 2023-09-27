import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis' ;

import 'react-vis/dist/style.css'

function Test() {

  return (
    
    <Box sx={{ marginTop: '10px'}}>
      <XYPlot margin={{bottom: 70}} xType="ordinal" width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickLabelAngle={-45} />
      <YAxis />
      <VerticalBarSeries
        data={[
          {x: 'May 23 2017', y: 10},
          {x: 'May 23 2018', y: 5},
          {x: 'May 23 2019', y: 15}
        ]}
      />
      
      </XYPlot>
    </Box>

  );

} 

export default Test;










// React.useEffect(() => {
//   if (dialogOpen) {
//     const { current: descriptionElement } = descriptionElementRef;
//     if (descriptionElement !== null) {
//       descriptionElement.focus();
//     }
//   }
// }, [dialogOpen]);

// return (
  
//   <div>

//     <Icon className="custom-icon" > star</Icon>
       
//       <Button onClick={handleClickOpen('paper')}> Show Answers </Button>

//       <Dialog
//         open={dialogOpen}
//         onClose={handleClose}
//         scroll={scroll}
//         aria-labelledby="scroll-dialog-title"
//         aria-describedby="scroll-dialog-description"
//       >

      
//       <div class="scrollbar-answers"> 
//         <DialogTitle id="scroll-dialog-title"> Check out the correct answers </DialogTitle>
        
//         <DialogContent dividers={scroll === 'paper'}>
        
//           <DialogContentText
//             id="scroll-dialog-description"
//             ref={descriptionElementRef}
//             tabIndex={-1}
//           >
//             {[...new Array(50)]
//               .map(
//                 () => `Cras mattis consectetur purus sit amet fermentum.
//                       Cras justo odio, dapibus ac facilisis in, egestas eget quam.
//                       Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
//                       Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//                                     )
//               .join('\n')}
//           </DialogContentText>
          
//         </DialogContent>
        
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>          
//         </DialogActions>
        
//       </div>

//       </Dialog>
    
//   </div>



{/* <RadarChart
            data={DATA}
            domains={DOMAIN}
            style={{
                polygons: {
                    fillOpacity: 0.35,
                    strokeWidth: 3,
                    strokeOpacity: 1,
                    fill: 'green',
                    stroke: 'darkgreen'  
                },
                axes: {
                    text: { opacity: 0.45, fill: 'blue' },
                    
                },
                labels: {
                    textAnchor: 'middle',
                    fontSize: 12,
                    fontFamily: "\"Poppins\", \"Helvetica\", \"Arial\", sans-serif",
                    fontWeight: 500,
                    fill: 'red',                                                                                                         
                },     
            }}
            margin={{
                left: 70,
                top: 70,
                bottom: 70,
                right: 70
            }}
            width={500}
            height={500}
            >

            <CircularGridLines
                style={{fill: 'orange', fillOpacity: .3, opacity: 0.5, stroke: 'green'}}
                tickValues={[...new Array(10)].map((v, i) => i / 10 - 1)}
            />
          </RadarChart> */}