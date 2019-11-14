import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Task from '../task';

const Column = styled.div`
    background-color: #F2F2F2;
    border-radius: 8px;
    margin: 8px;
`

const List = ({name, data, id}) => {
    return (
        <Column>
            <Header name={name} id={id}/>
            {
                data.map(task => (
                    <Task key={task.id} name={task.name} description={task.text} id={task.id}/>
                ))
            }
        </Column>
    )
}

export default List