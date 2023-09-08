import React, { useEffect, useContext } from 'react';
import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';


function ScoreHisotry() {

        const { currentUser } = useContext(UserContext);

        useEffect(() => {
            
            async function fetchCurrentSores() {
                try {

                    const username = currentUser.username;
                    const fetchedCurrentScores = await WarmUpApi.getCurrentScores(username);
                    setScores(fetchedCurrentScores);

                } catch (error) {

                    console.error("Error fetching current scores:", error);

                }
            }
            
            fetchCurrentSores();
            
        }, []);


}

export default ScoreHisotry;