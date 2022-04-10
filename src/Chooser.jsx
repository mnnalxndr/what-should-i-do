import React, { useState } from 'react';

const PERSONS = {
  ALEX: 'Alex',
  TASH: 'Tash'
}

const OPTIONS = {
  Both: [
    'Message a friend',
    'House chore',
    'Free time!',
    'Dog Training'
  ],
  Tash: [
    'Carry on writing',
    'Write some back story',
    'Blog',
    'Data Camp',
    'Piano',
    'Pilates'
  ],
  Alex: [
    'Existing Band Idea',
    'Existing Solo Idea',
    'New Thing',
    'Practice/Learn',
    'Coding course',
    'Coding project',
    'Run'
  ]
};

const Chooser = () => {
  const [person, setPerson] = useState(null);
  const [suggestion, setSuggestion] = useState('');

  const getNewSuggestion = () => {
    const options = [
      ...OPTIONS.Both,
      ...OPTIONS[person]
    ];
    return options[Math.floor(Math.random() * options.length)]
  }
  const chooseHandler = () => {
    let newSuggestion = getNewSuggestion();
    while (newSuggestion === suggestion) {
      newSuggestion = getNewSuggestion();
    }
    setSuggestion(newSuggestion);
  }

  const setPersonHandler = (person) => {
    setSuggestion('');
    setPerson(person);
  }

  return (
    <div className='App'>
      <h1>What should I do?</h1>
      <h3>Who are we choosing for?</h3>
      <div>
        <button
          type='button'
          onClick={() => setPersonHandler(PERSONS.ALEX)}
        >Alex</button>
        <button
          type='button'
          onClick={() => setPersonHandler(PERSONS.TASH)}
        >Tash</button>
      </div>
      {person ? 
        <div>
          <h3>{suggestion}</h3>
          <button
            type='button'
            onClick={chooseHandler}
          >Suggest {suggestion === '' ? '' : 'another '}activity for {person}</button>
        </div> :
        null }
    </div>
  );
}

export default Chooser;
