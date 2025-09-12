import { Component } from "react";
import shortid from "shortid";

import { PageTitle } from "components/PageTitle/PageTitle";
import { EventBoard } from "../EventBoard/EventBoard";
import upcomingEvents from "../../upcoming-events.json";

import { FaBeer } from "react-icons/fa";

import { Container } from "./App.styled";
import { Counter } from "components/Counter/Counter";
import { Dropdown } from "components/Dropdown/Dropdown";
import { TodoList } from "components/TodoList/TodoList";
import initialTodos from "../../todos.json";
import { Form } from "components/Form/Form";
import { TodoEditor } from "components/TodoEditor/TodoEditor";
import { Filter } from "components/TodoList/Filter";
export class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    console.log(text);

    const todo = {
      id: shortid.generate(),
      text,
      complete: false,
    };

    this.setState((prevState) => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(({ id }) => id !== todoId),
    }));
  };

  toggleCompleted = (todoId) => {
    console.log(todoId);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, todos } = this.state;
    const visibleTodos = this.getVisibleTodos();
    return (
      <Container>
        <PageTitle text="24th core worlds coalition conference" />
        <EventBoard events={upcomingEvents} />
        <FaBeer />
        <Counter initialValue={100} />
        <Dropdown />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <TodoEditor onSubmit={this.addTodo} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Form onSubmit={this.formSubmitHandler} />
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
