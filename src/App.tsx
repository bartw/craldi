import * as React from "react";
import Equipment from "./equipment"

const Exercises = () => (
  <div>
    <h2>Exercises</h2>
    <ul>
        <li>Burpee</li>
        <li>Push up</li>
        <li>Lunge</li>
        <li>Squat</li>
        <li>Russian twist</li>
    </ul>
  </div>
);

const App = () => (
  <div>
    <h1>Craldi</h1>
    <Equipment />
    <Exercises />
  </div>
);

export default App;
