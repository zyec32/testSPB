import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import List from './components/list';

const Table = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: auto;
  background-color: #E5E5E6;
`

const App = ({boards}) => {
  return (
    <Table>
      {
        boards.map(board => (
          <List key={board.id} id={board.id} name={board.name} data={board.tasks} isLocked={board.id === 2}></List>
        ))
      }
    </Table>
  );
}

const mapStateToProps = state => ({
  boards: state.boards
})

export default connect(mapStateToProps)(App);
