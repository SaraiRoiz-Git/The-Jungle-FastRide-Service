import styled from 'styled-components';
import './App.css';
import Instractions from './components/Instractions';

function App() {
  return (
    <Container>
      <Instractions></Instractions>
    </Container>
  );
}

const Container = styled.div`
display: flex;
justify-content: center;
`
export default App;
