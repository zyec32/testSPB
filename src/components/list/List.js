import React from 'react';
import styled from 'styled-components';
import Header from '../header';
import Task from '../task';

const Column = styled.div`
    background-color: #F2F2F2;
    border-radius: 8px;
    margin: 8px;
`

const List = ({name, data, id, isLocked}) => {
    return (
        <Column>
            <Header name={name} id={id} isLocked={isLocked}/>
            {
                data.map(task => (
                    <Task key={task.id} name={task.name} description={task.text} id={task.id} boardId={id} isLocked={isLocked}/>
                ))
            }
        </Column>
    )
}

export default List