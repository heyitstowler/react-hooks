import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import UseStateExample from './lessons/UseState'
import UseStateExample2 from './lessons/UseState2'
import UseEffectExample from './lessons/UseEffect'
import UseEffectExample2 from './lessons/UseEffect2'
import UseContextExample from './lessons/UseContext'
import FetchingDataExample from './lessons/FetchingData'
import { Provider } from './Context';

const lessons = [
  { to: "/use-state", title: 'Use State' },
  { to: "/use-state-2", title: 'Use State - pt 2' },
  { to: "/use-effect", title: 'Use Effect' },
  { to: "/use-effect-2", title: 'Use Effect - pt 2' },
  { to: "/use-context", title: 'Use Context' },
  { to: "/fetching", title: 'Fetching Data' },
]

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <nav className="nav">
          {lessons.map(({ title, to }) => (
            <Link className="nav__link" key={title} to={to}>
              {title}
            </Link>
          ))}
        </nav>
        <div className="lesson">
          <Switch>
            <Route path="/use-state">
              <h1>Use State</h1>
              <UseStateExample />
            </Route>
            <Route path="/use-state-2">
              <h1>Use State: Part 2</h1>
              <UseStateExample2 />
            </Route>
            <Route path="/use-effect">
              <h1>Use Effect</h1>
              <UseEffectExample />
            </Route>
            <Route path="/use-effect-2">
              <h1>Use Effect: Part 2</h1>
              <UseEffectExample2 />
            </Route>
            <Route path="/use-context">
              <Provider>
                <h1>Use Context</h1>
                <UseContextExample />
              </Provider>
            </Route>
            <Route path="/fetching">
              <h1>Fetching Data</h1>
              <FetchingDataExample />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
