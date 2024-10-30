import React, { useState, useEffect } from 'react';
import WindowManager from './components/WindowManager';
import { EventContext } from './libs/EventContext';
import EventEmitter from './libs/EventEmitter';
import { stringToDom } from './libs/stringToDom';
import { darkMode } from './libs/darkMode';
import img from '../common/images/halloween-bg.jpg';

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
  const eventEmitter = new EventEmitter();

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

  // Easter egg for Halloween, adding bats
  const now = new Date();
  if (now.getMonth() === 9 && now.getDate() >= 28) {
    if (!document.body.classList.contains('halloween')) {
      // add image
      const html = `<img src="${img}" class="halloween-bg" alt="Halloween background" />`;
      document.body.prepend(stringToDom(html));
      document.body.classList.add('halloween');
      darkMode(true);
    }
  }

  if (!data)
    return;

  return (
    <EventContext.Provider value={eventEmitter}>
      <WindowManager data={data} />
    </EventContext.Provider>
  );
}
