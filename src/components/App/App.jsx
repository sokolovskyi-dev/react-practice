import { PageTitle } from "components/PageTitle/PageTitle";
import { EventBoard } from "../EventBoard/EventBoard";
import upcomingEvents from "../../upcoming-events.json";

import { FaBeer } from "react-icons/fa";

import { Container } from "./App.styled";
import { Counter } from "components/Counter/Counter";

export const App = () => {
  return (
    <Container>
      <PageTitle text="24th core worlds coalition conference" />
      <EventBoard events={upcomingEvents} />
      <FaBeer />
      <Counter initialValue={100} />
    </Container>
  );
};

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
