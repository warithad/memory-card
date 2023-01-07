import styled from "styled-components";

const Card =(
    { 
    name, 
    avatar, 
    onClick 
    })=>{
    return (
        <CardWrapper onClick={onClick} className='card'>
            <img src={avatar} alt={name} height='150px' width='150px'/>
            <h3>{name}</h3>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: arial;
`;

export default Card;