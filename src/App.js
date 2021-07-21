import styled from 'styled-components';
import './App.css';
import Homepage from './layouts/Homepage/Homepage';

function App() {
  return (
    <Container>
      <Homepage></Homepage>
    </Container>
  );
}


export default App;

const Container = styled.div`
background-color:  #232323;
display: flex;
justify-content: center;
`