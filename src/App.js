
import './App.css';
import AssignmentTwo from './components/AssignmentTwo';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <p>
      I am your Emmanuel Darko Cobblah, this is my first React application
      </p>
      <AssignmentTwo/>
     <div className='assignment-3'>
     <Button name='Login' />
      <Button name='Signin' />
     </div>
    </div>
  );
}

export default App;
