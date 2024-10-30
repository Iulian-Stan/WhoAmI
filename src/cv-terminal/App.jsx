import React, { useState, useEffect } from 'react';
import WindowManager from './components/WindowManager';
import { EventContext } from './libs/eventContext';
import EventEmitter from './libs/EventEmitter';
import { halloweenMode } from './libs/halloweenMode';
import { christmasMode } from './libs/christmasMode';

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

  const now = new Date();
  // Easter egg for Halloween
  if (now.getMonth() === 9 && now.getDate() >= 28) {
    halloweenMode(true);
  }
  // Christmas Easter egg, adding Santa
  if (now.getMonth() === 11) {
    christmasMode(true);
  }

  if (!data)
    return;

  return (
    <EventContext.Provider value={eventEmitter}>
      <WindowManager data={data} />
    </EventContext.Provider>
  );
}
