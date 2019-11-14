import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`

const Name = styled.div`

`

const Header = (props) => {

    const [name, setName] = useState(props.name);
    useEffect(() => {
        setName(props.name);
    }, props.name)

    return (
        <Container>
            <Name>{name}</Name>
        </Container>
    )
}

export default Header