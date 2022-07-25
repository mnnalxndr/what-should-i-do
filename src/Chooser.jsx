import React, { useState } from 'react';

const PERSONS = {
  ALEX: 'Alex',
  TASH: 'Tash'
}

const MUSIC_COURSE = 'Music Course';
const MUSIC_PROJECT = 'Music Project';
const CODING_COURSE = 'Coding Course';
const CODING_PROJECT = 'Conding Project';
const PRACTICE_LEARN = 'Practise/Learn';

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
    'Pilates',
    'Drawing',
    'Gardening'
  ],
  Alex: [
    MUSIC_PROJECT,
    MUSIC_COURSE,
    PRACTICE_LEARN,
    CODING_COURSE,
    CODING_PROJECT,
    'Run'
  ]
};

const MUSIC_PROJECT_OPTIONS = [
  'Outcries',
  'Codices',
  'Solo',
  'Electronic'
];
const MUSIC_COURSE_OPTIONS = [
  'Logic',
  'Ableton',
  'Endless',
  'Syntorial',
  'Genre'
];
const PRACTICE_LEARN_OPTIONS = [
  'Drums',
  'Guitar',
  'Piano'
];
const CODING_COURSE_OPTIONS = [
  'React',
  'Pluralsight',
  'Juce',
  'Audioprogrammer',
  'BrowserNoise',
  'Javascript Visualisation'
];
const CODING_PROJECT_OPTIONS = [
  'What Should I Do',
  'Work'
];

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
          <button
            type='button'
            onClick={chooseHandler}
          >Suggest {suggestion === '' ? '' : 'another '}activity for {person}</button>
        </div> :
        null }
        <h3>{suggestion}</h3>
    </div>
  );
}

export default Chooser;
