import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* Functional component */}
      <Greet />
      {/* Class compoment */}
      <Welcome name="Class"/>
      {/* JSX */}
      <Hello name="Mimi">
        <p>Watagi?</p>
      </Hello>
      <Message />
      <Counter />
    </div>
  );
}

export default App;
