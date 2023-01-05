import styled from "styled-components";

const Card =(
    { 
    name, 
    avatar, 
    onClick 
    })=>{
    return (
        <CardWrapper onClick={onClick}>
            <img src={avatar} alt={name}></img>
            <h3>{name}</h3>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Card;