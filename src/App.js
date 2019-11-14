import React from 'react';
import styled from 'styled-components';
import List from './components/list';

const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #E5E5E6;
  justify-items: center;
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
