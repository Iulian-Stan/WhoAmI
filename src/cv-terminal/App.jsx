import React, { useState, useEffect } from 'react';
import Terminal from './components/Terminal';
import { actionCommands } from './libs/actionCommands';

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
// import commands from './resources/commands.json';

export default function App() {

  const [commands, setCommands] = useState();

  useEffect(() => {
    fetch('./commands.json')
      .then(response => {
        console.log(response);
        response.json().then(setCommands);
      })
      .catch(err => {
        console.log(err);
        alert('Could not fetch data from server!');
      });
  }, []);

  return commands ? <Terminal commands={commands} actionCommands={actionCommands}/> : <></>;
}
