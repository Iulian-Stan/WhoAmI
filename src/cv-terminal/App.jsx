import React, { useState, useEffect, useCallback } from 'react';
import EventEmitter from './libs/EventEmitter';
import { EventContext } from './libs/EventContext';
import WindowManager from './components/WindowManager';

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

  const [data, setData] = useState();
  const MouseEmitter = new EventEmitter();

  useEffect(() => {
    fetch('./whoami.json')
      .then(response => {
        response.json().then(setData);
      })
      .catch(err => {
        console.log(err);
        alert('Could not fetch data from server!');
      });
  }, []);

  if (!data)
    return;

  return (
    <EventContext.Provider value={MouseEmitter}>
      <WindowManager data={data} />
    </EventContext.Provider>
  );
}
