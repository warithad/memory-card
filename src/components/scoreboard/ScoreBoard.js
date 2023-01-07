import styled from "styled-components";

const ScoreBoard =({highScore, currentScore})=>{
    return(
        <ScoreBoardWrapper>
            <h2>High Score: {highScore}</h2>
            <h2>Current Score: {currentScore}</h2>
        </ScoreBoardWrapper>
    );
}

const ScoreBoardWrapper = styled.div`
    display: flex;
    justify-content: center;
    font-family: arial;
    font-size: 1.4vw;
    gap: 2rem;
`

export default ScoreBoard;