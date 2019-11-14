import React from 'react';
import { connect } from 'react-redux'
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
            <Header name="6"/>
            <Task name={props.tasks[0].text} description="lorem"/>
        </Column>
    )
}

export default connect(state => ({
    tasks: state.todos,
}))(List)