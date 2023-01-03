import styled from "styled-components";
import Grid from "./cards/Grid";
import ScoreBoard from "./scoreboard/ScoreBoard";

const Main =()=>{
    
    return(
        <MainWrapper>
            <ScoreBoard/>
            <Grid/>
        </MainWrapper>
    )
}

const MainWrapper = styled.div`

`
export default Main;