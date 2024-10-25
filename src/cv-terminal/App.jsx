import React, { useState, useEffect } from 'react';
import EventEmitter from './libs/EventEmitter';
import { EventContext } from './libs/EventContext';
import Terminal from './components/Terminal';
import Window from './components/Window';
import { actionCommands } from './libs/actionCommands';
import Header from './components/Header';
import ResumeMain from './components/ResumeMain';

/**
 * @typedef Command
 * @property {string} command
 * @property {string} responseType
 * @property {string?} value
 * @property {string[]?} headers
 * @property {string[]?} rows
 */

/**
 * @type {Command[]} commands
 */

export default function App() {

  const [commands, setCommands] = useState();
  const MouseEmitter = new EventEmitter();

  useEffect(() => {
    fetch('./commands.json')
      .then(response => {
        response.json().then(setCommands);
      })
      .catch(err => {
        console.log(err);
        alert('Could not fetch data from server!');
      });
  }, []);

  if (!commands)
    return

  return (
    <EventContext.Provider value={MouseEmitter}>
      <Window>
        <Terminal commands={commands} actionCommands={actionCommands}/>
      </Window>
      <Window>
        <Header />
        <ResumeMain />
      </Window>
    </EventContext.Provider>
  );
}
