import React, { useState } from 'react';

import './NewGoal.css';

const NewGoal = props => {
  const [enteredText, setEnteredText] = useState('');

  const addGoalHandler = (event) => {
    event.preventDefault();
    // prevent the browser-default behavior, which is to send a request to a server

    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    };

    setEnteredText(''); // resets input field

    // console.log(newGoal);
    props.onAddGoal(newGoal);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
    // enteredText will change whenever the user input changes
  };

  // note: in <form>, "addGoalHandler" has no parentheses 
  // -> we want the function to be invoked when the 'submit' event occurs
  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
