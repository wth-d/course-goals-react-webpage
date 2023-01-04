import React from "react";

import './GoalList.css';
// put styles that only apply to this component in a separate CSS file

const GoalList = props => {
  //console.log(props.goals);

  // test: render an array of JSX elements
  // return (
  //   <ul className="goal-list">
  //     {[<li>Hi</li>, <li>this works</li>]}
  //   </ul>
  // );
  
  return (
    <ul className="goal-list">{
      props.goals.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })
    }</ul>
  );
};

export default GoalList;
