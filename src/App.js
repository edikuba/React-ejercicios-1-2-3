import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactState from './components/container/contact_state';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greetings.jsx */}
        {/* <Greeting name="Edy"></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name ="Trini"></GreetingF> */}
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* Ejercicios sesiones 1, 2 y 3 */}
        <ContactState></ContactState>
      </header>
    </div>
  );
}

export default App;
