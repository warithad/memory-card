import styled from "styled-components";

const Header =()=>{
    return(
        <HeaderContainer>
            <h1>Memory Card</h1>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    background-color: #166534;
    color: black;
    font-size: 2vw;
    font-family: arial;
    color: white;
    padding: 2rem 0;
    text-align: center;
`;

export default Header;