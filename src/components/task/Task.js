import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodoName, editTodoText } from '../../actions';
import styled from 'styled-components';

const Container = styled.div`
    background-color: white;
    margin: 8px;
    padding: 8px;
`

const Name = styled.div`
    font-weight: 900;
    font-size: 16px;
    word-wrap: break-word;
`

const Description = styled.div`
    font-size: 14px;
    word-wrap: break-word;
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

const Task = ({name, description, id, dispatch}) => {
    return (
        <Container>
            <Name suppressContentEditableWarning contentEditable onBlur={e => {dispatch(editTodoName(id, e.currentTarget.textContent))}}>{name}</Name>
            <Description suppressContentEditableWarning contentEditable onBlur={e => {dispatch(editTodoText(id, e.currentTarget.textContent))}}>{description}</Description>
            <div>
                <Delete onClick={() => {dispatch(deleteTodo(id))}}>Удалить</Delete>
                <Move>Переместить ↓</Move>
            </div>
        </Container>
    )
}

export default connect()(Task)