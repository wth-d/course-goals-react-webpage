import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

// const App = () => {
//   return <h1 title="this works">A React App!</h1>;
//   // JSX are always translated to React.createElement(...)
//   // React.createElement('h1', {title: 'this works'}, 'A React App!')

// };

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: "cg1", text: "Finish the Course"},
    {id: "cg2", text: "Learn about all topics"},
    {id: "cg3", text: "Look at Q&A section"},
  ]);

  // const courseGoals = [
  //   {id: "cg1", text: "Finish the Course"},
  //   {id: "cg2", text: "Learn about all topics"},
  //   {id: "cg3", text: "Look at Q&A section"},
  // ];

  const addNewGoalHandler = (newGoal) => {
    // courseGoals.push(newGoal);
    // console.log(courseGoals);

    // with "state"
    // setCourseGoals(courseGoals.concat(newGoal));

    // a safer way to ensure state is updated correctly
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
// we have export statement so that this <App /> component can be used elsewhere;
