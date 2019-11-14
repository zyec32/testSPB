import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    margin: 8px;
    padding: 8px;
`

const Name = styled.div`
    font-weight: 900;
    font-size: 16px;
`

const Description = styled.div`
    font-size: 14px;
`

const Delete = styled.span`
    color: #ef5050;
    font-size: 14px;
    cursor: pointer;
    margin-right: 8px;
`

const Move = styled.span`
    color: #bdb9b9;
    font-size: 14px;
    cursor: pointer;
`

const Task = (props) => {
    return (
        <Container>
            <Name>{props.name}</Name>
            <Description>{props.description}</Description>
            <div>
                <Delete>Удалить</Delete>
                <Move>Переместить ↓</Move>
            </div>
        </Container>
    )
}

export default Task