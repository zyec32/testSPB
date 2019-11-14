import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodoName, editTodoText, moveTodo } from '../../actions';
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
    position: relative;
    color: #bdb9b9;
    font-size: 14px;
    cursor: pointer;
    z-index: 100;
`

const DropDown = styled.div`
    position: absolute;
    top: 20;
    left: 0;
    min-width: 100px;
    visibility: ${({isDown}) => isDown ? 'visible' : 'hidden'};
    z-index: -101;
`

const DropItem = styled.div`
    min-width: 100px;
    height: 20px;
    color: #000;
`

const Task = ({name, description, id, boardId, dispatch, boards, isLocked}) => {

    const [dropIsDown, setDropIsDown] = useState(false);

    const nextBoards = boards.filter(board => (board.id !== boardId));

    return (
        <Container>
            <Name 
                suppressContentEditableWarning 
                contentEditable={!isLocked}
                onBlur={e => {dispatch(editTodoName(id, e.currentTarget.textContent))}}>
                    {name}
            </Name>
            <Description 
                suppressContentEditableWarning 
                contentEditable={!isLocked}
                onBlur={e => {dispatch(editTodoText(id, e.currentTarget.textContent))}}>
                    {description}
            </Description>
            <div>
                <Delete onClick={() => {dispatch(deleteTodo(id))}}>Удалить</Delete>
                <Move onMouseOver={() => setDropIsDown(true)} onMouseLeave={() => setDropIsDown(false)}  >Переместить ↓ 
                    <DropDown isDown={dropIsDown}>
                        {
                            nextBoards.map(board => (
                                <DropItem onClick={()=>dispatch(moveTodo(id, board.id))} key={board.id}>{board.name}</DropItem>
                            ))
                        }
                    </DropDown>
                </Move>
                
            </div>
        </Container>
    )
}

const mapStateToProps = state => ({
    boards: state.boards
})

export default connect(mapStateToProps)(Task)