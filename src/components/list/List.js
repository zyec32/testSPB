import React from 'react';
import styled from 'styled-components';
import Header from '../header';

const Column = styled.div`
    background-color: #F2F2F2;
    border-radius: 8px;
    width: calc(100% - 16px); 
    margin: 8px;
`

const List = () => {
    return (
        <Column>
            <Header/>
            Hui
        </Column>
    )
}

export default List