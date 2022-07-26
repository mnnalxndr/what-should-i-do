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

const SPECIFIC_OPTIONS = {
  [MUSIC_PROJECT]: [
    'Outcries',
    'Codices',
    'Solo',
    'Electronic',
    'Workflow'
  ],
  [MUSIC_COURSE]: [
    'Logic',
    'Ableton',
    'Endlesss',
    'Syntorial',
    'Genre',
    'Theory'
  ],
  [PRACTICE_LEARN]: [
    'Drums',
    'Guitar',
    'Piano'
  ],
  [CODING_COURSE]: [
    'React',
    'Pluralsight',
    'JUCE',
    'Audioprogrammer',
    'BrowserNoise',
    'Javascript Visualisation',
    'Android'
  ],
  [CODING_PROJECT]: [
    'What Should I Do',
    'Work'
  ]
}

const Chooser = () => {
  const [person, setPerson] = useState(null);
  const [suggestion, setSuggestion] = useState('');
  const [showSpecific, setShowSpecific] = useState(false);
  const [specific, setSpecific] = useState('');

  const randomOption = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  const getNewSuggestion = () => {
    const options = [
      ...OPTIONS.Both,
      ...OPTIONS[person]
    ];
    return randomOption(options);
  }

  const getSpecific = () => {
    return randomOption(SPECIFIC_OPTIONS[suggestion]);
  }

  const mainChooseHandler = () => {
    let newSuggestion = getNewSuggestion();
    while (newSuggestion === suggestion) {
      newSuggestion = getNewSuggestion();
    }
    if ([MUSIC_PROJECT, MUSIC_COURSE, PRACTICE_LEARN, CODING_COURSE, CODING_PROJECT].includes(newSuggestion)) {
      setShowSpecific(true);
      setSpecific('');
    } else {
      setShowSpecific(false);
    }
    setSuggestion(newSuggestion);
  }

  const secondaryChooseHandler = () => {
    let newSpecific = getSpecific();
    while (newSpecific === specific) {
      newSpecific = getSpecific();
    }
    setSpecific(newSpecific);
  }

  const setPersonHandler = (person) => {
    setSuggestion('');
    setSpecific('');
    setShowSpecific(false);
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
            onClick={mainChooseHandler}
          >Suggest {suggestion === '' ? '' : 'another '}activity for {person}</button>
        </div> :
        null
      }
      <h3>{suggestion}</h3>
      {showSpecific ?
        <>
          <button
            type='button'
            onClick={secondaryChooseHandler}
          >{specific === '' ? 'Be more specific' : 'Try again'}</button>
          <h3>{specific}</h3>
        </> :
        null
      }
    </div>
  );
}

export default Chooser;
