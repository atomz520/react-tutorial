import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import EventBind from './components/EventBind';
import ParentCompoment from './components/ParentCompoment';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Speech from './components/Speech';

function App() {
  return (
    <div className="App">
      {/* Functional component */}
      {/* <Greet /> */}
      {/* Class compoment */}
      {/* <Welcome name="Class"/> */}
      {/* JSX */}
      {/* <Hello name="Mimi">
        <p>Watagi?</p>
      </Hello>
      <Message />
      <Counter /> */}
      {/* <EventBind /> */}
      {/* <ParentCompoment />
      <UserGreeting /> */}
      <NameList /> 
      {/* <Speech /> */}
    </div>
  );
}

export default App;
