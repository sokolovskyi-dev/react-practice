import { Component } from "react";

import { PageTitle } from "components/PageTitle/PageTitle";
import { EventBoard } from "../EventBoard/EventBoard";
import upcomingEvents from "../../upcoming-events.json";

import { FaBeer } from "react-icons/fa";

import { Container } from "./App.styled";
import { Counter } from "components/Counter/Counter";
import { Dropdown } from "components/Dropdown/Dropdown";
import { TodoList } from "components/TodoList/TodoList";
import initialTodos from "../../todos.json";
export class App extends Component {
  state = {
    todos: initialTodos,
    name: "",
    tag: "",
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(({ id }) => id !== todoId),
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { todos } = this.state;
    return (
      <Container>
        <PageTitle text="24th core worlds coalition conference" />
        <EventBoard events={upcomingEvents} />
        <FaBeer />
        <Counter initialValue={100} />

        <Dropdown />

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <form>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Tag
            <input
              name="tag"
              type="text"
              value={this.state.tag}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </Container>
    );
  }
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
