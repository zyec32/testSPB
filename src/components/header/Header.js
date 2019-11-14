import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: grid;
    grid-template-rows: 1fr, 1fr;
    padding: 8px;
    position: relative;
`

const Name = styled.div`
    align-self: center;
    justify-self: center;
`

const Adder = styled.div`
    align-self: center;
    justify-self: center;
    text-decoration: underline;
    color: blue;
    cursor: pointer;
    user-select: none;
`

const Sort = styled.div`
    position: absolute;
    right: 8px;
    top: 8px;
    color: #2DCD72;
    cursor: pointer;
    user-select: none;
`

const Header = (props) => {

    const [name, setName] = useState(props.name);
    useEffect(() => {
        setName(props.name);
    }, props.name)

    return (
        <Container>
            <Sort>Sort (А-я)</Sort>
            <Name>{name}</Name>
            <Adder>Добавить задачу</Adder>
        </Container>
    )
}

export default Header