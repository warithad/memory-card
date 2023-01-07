import styled from "styled-components";
import Card from "./Card"

const Grid =({cards, onClickCard})=>{

    return (
        <GridContainer>
            {cards.map(
                card => 
                    {
                    return <Card 
                            key={card.id}
                            name={card.name}
                            avatar={card.avatar}
                            onClick={name => onClickCard(card.name)}
                            />
                }
            )}
        </GridContainer>
    )
}

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    min-height: 100vh;
    margin-bottom: 2rem;
`
export default Grid;