import React, { useState } from 'react';
import Switch from 'react-switch';
import './App.css';

const OPTIONS = {
  "Both": [
    "Message a friend",
    "House chore",
    "Free time!"
  ],
  "Tash": [
    "Carry on writing",
    "Write some back story",
    "Blog",
    "Data Camp",
    "Piano"
  ],
  "Alex": [
    "Existing Band Idea",
    "Existing Solo Idea",
    "New Thing",
    "Practice/Learn",
    "Coding course",
    "Coding project"
  ]
};

function App() {
  const [ isTash, setIsTash ] = useState(false);
  const [ suggestion, setSuggestion ] = useState("Click 'Choose' to get a suggestion");

  const chooseHandler = () => {
    let subset;
    if (isTash) {
      subset = OPTIONS.Tash;
    } else {
      subset = OPTIONS.Alex;
    }
    const options = [
      ...OPTIONS.Both,
      ...subset
    ];
    setSuggestion(options[Math.floor(Math.random() * options.length)]);
  }

  return (
    <div className="App">
      <header>What should I do?</header>
      <div>Who are we choosing for?</div>
      <div>
      <Switch
        checked={isTash}
        onChange={() => setIsTash(!isTash)}
        uncheckedIcon={
          <div style={{padding: 5}}>Alex</div>
        }
        checkedIcon={
          <div>Tash</div>
        }
        className="react-switch"
        id="icon-switch"
      />
      </div>
      <div>
      <button
        type="button"
        onClick={chooseHandler}
      >Choose</button>
      </div>
      <h3>{suggestion}</h3>
    </div>
  );
}

export default App;
