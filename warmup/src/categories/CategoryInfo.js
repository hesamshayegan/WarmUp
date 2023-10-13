import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import categoryData from "./CategoryData";
import WarmUpApi from "../api/api";
import Slide from '@mui/material/Slide';
import UserContext from "../common/UserContext";
import { 
Grid, Box, Typography, Button
}
from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from "../theme";


const btnStyle = {
    background: "linear-gradient(90deg, rgba(12,225,255,1) 0%, rgba(0,230,107,1) 71%, rgba(188,255,12,1) 100%)",
    borderRadius: "30px",
    border: 0,
    color: "white",
    height: "58px",
    width: "150px",
    padding: "10px",
    fontSize: "24px",
    boxShadow: "0 3px 5px 2px rgba(255, 255, 102, 0.3)",
    transition: "box-shadow 0.3s ease-in-out",
    [theme.breakpoints.down("md")]: {                                    
      height: "45px",
      width: "100px",
      fontSize: "16px",
      marginTop: "5px"

      },
    "&:hover": {
        boxShadow: "0 6px 10px 4px rgba(0, 255, 102, 0.3)",
        border: "none",
    }
}

const titleStyle = {
    m: 2,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {                                    
        textAlign: "center"                                                  
        }
}

const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
}

const UnderGreen= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#93FF00',
    textDecorationThickness: '8px',
    display: 'inline'  
})

const UnderOrange= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#EB7A04',
    textDecorationThickness: '4px',
    display: 'inline'  
})

const CategoryInfo = () => {

    const navigate = useNavigate();
    const {  currentUser } = useContext(UserContext);
    const [record, setRecord] = useState({});
    const { category, id } = useParams();
    const categories = categoryData


        useEffect(() => {
            
            async function getRecord() {

                try {   
                        if(currentUser) {

                            const username = currentUser.username;
                            const response = await WarmUpApi.getRecord({ username, category });
                            setRecord(response)

                        }
                    
                 } catch (err) {
                        console.error("Error fetching record:", err)
                    }

            }
            
            getRecord();
        }, []);

        
        
        const handleRestartQuiz = async () => {
            
            const username = currentUser.username;
            await WarmUpApi.deleteRecord({ username, category });
            navigate(`../quiz/categories/${category}`)

        }


    const categoryInfo = categories.find(cat => cat.name === category); 

    console.log('categoryInfo', categoryInfo)


    return (

        <Grid container>
                
                <Grid item className="test" md={6}>

                    <Slide direction="right" 
                        in={true} 
                        mountOnEnter 
                        unmountOnExit
                        easing={{
                            enter: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        timeout={{ enter: 1200, exit: 0 }}
                    >
                        <Box sx={{ 
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <Box sx={{ marginTop: "10px", width: "75%" }}
                            >                        
                                <Typography variant="h5" sx={{ textAlign: 'center', m: 2 }}> {categoryInfo.info1} </Typography>
                                <Typography variant="h5" sx={{ textAlign: 'center' }}> {categoryInfo.info2} </Typography>
                            </Box>
                            <Box sx={{ 
                                display: "flex",
                                justifyContent: "center",                        
                                alignItems: "center"
                            }}>
                                <img
                                    src={categoryInfo.img}
                                    style={{ width: "80%", height: "80%" }}

                                />
                            </Box>
                        </Box>
                    </Slide>

                </Grid>

                <Grid item md={6} sx={containerStyle}>
                        <Box sx={containerStyle}>
                            <Typography variant="h3" sx={{ alignItems: "center", textTransform: "uppercase" }}> 
                                    <UnderGreen>
                                        {categoryInfo.name === "fossil-fuels" ? "fossil fuels"
                                        : categoryInfo.name === "food-production" ? "food production"
                                        : categoryInfo.name }
                                    </UnderGreen> quiz                                
                            </Typography>
                            {record ? (
                                <Box>
                                {record.current_complexity === "easy" && (
                                    <Box sx={containerStyle}>
                                        <Typography variant="h4" sx={titleStyle}>
                                            Are you ready to try some <UnderOrange>medium questions</UnderOrange>?
                                        </Typography>
                                        <Button href={`../quiz/categories/${category}`} key={id} sx={btnStyle}>
                                            Start
                                        </Button>
                                    </Box>
                                )}

                                {record.current_complexity === "medium" && (
                                    <Box sx={containerStyle}>
                                        <Typography variant="h4" sx={titleStyle}>
                                            Are you ready to try some <UnderOrange>hard questions</UnderOrange>?
                                        </Typography>
                                        <Button href={`../quiz/categories/${category}`} key={id} sx={btnStyle}>
                                            Start
                                        </Button>
                                    </Box>
                                )}

                                {record.current_complexity === "hard" && (
                                    <Box sx={containerStyle}>
                                        <Typography variant="h4" sx={titleStyle}>
                                            Your previous score is {Math.round(100*(record.correct_answers / record.questions_per_category))}% 
                                        </Typography>
                                        <Typography variant="h4" sx={titleStyle}>
                                            Do you want to retake the quiz?
                                        </Typography>
                                        <Button onClick={handleRestartQuiz} sx={btnStyle}> Start </Button>
                                    </Box>
                                )}
                                </Box>
                            ) : (
                                <Box sx={containerStyle}>
                                    <Typography variant="h4" sx={titleStyle}>
                                        Are you ready to take the quiz?
                                    </Typography>
                                    <Button href={`../quiz/categories/${category}`} key={id} sx={btnStyle}>
                                        Play
                                    </Button>
                                </Box>
                            )}

                            {!currentUser ? (
                                <Box sx={containerStyle}>
                                    <Typography variant="h4" sx={titleStyle}>
                                        Are you ready to take the quiz?
                                    </Typography>
                                    <Button href={`../quiz/categories/${category}`} key={id} sx={btnStyle}>
                                        Play
                                    </Button>
                                </Box>
                            ) : (
                                null
                                )   
                            }
                        </Box>

                </Grid>

        </Grid>
        
    )

}

export default CategoryInfo
