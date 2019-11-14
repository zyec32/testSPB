import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const Header = () => {
    return (
        <Container>
            Pisos
        </Container>
    )
}

export default Header