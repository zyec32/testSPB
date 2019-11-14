import React from 'react';
import styled from 'styled-components';
import List from './components/list';

const Table = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  background-color: #E5E5E6;
`

const App = () => {
  return (
    <Table>
      <List/>
      <List/>
      <List/>
    </Table>
  );
}

export default App;
