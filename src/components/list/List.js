import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Task from '../task';

const Column = styled.div`
    background-color: #F2F2F2;
    border-radius: 8px;
    margin: 8px;
`

const List = (props) => {

    


    return (
        <Column>
            <Header name={props.name}/>
            <Task name="task" description="lorem"/>
        </Column>
    )
}

export default List