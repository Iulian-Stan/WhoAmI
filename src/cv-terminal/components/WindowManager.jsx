import React, { useCallback, useMemo, useState } from 'react';
import { actionCommands } from '../libs/actionCommands';
import { staticCommands } from '../libs/staticCommands';
import Window from './Window';
import Resume from './resume/Resume';
import Terminal from './terminal/Terminal';

const WindowContent = {
  resume: 'resume',
  terminal: 'terminal'
}

export default function WindowManager({ data }) {

  const commands = useMemo(() => staticCommands(data), [data]);

  const createWindow = useCallback(content => {
    let key = Date.now().toString();
    switch (content) {
      case WindowContent.resume:
        return <Window key={key} close={() => removeWindow(key)}><Resume data={data}/></Window>;
      case WindowContent.terminal:
        return <Window key={key} close={() => removeWindow(key)}><Terminal commands={commands} actionCommands={customCommands}/></Window>;
    }
  }, []);

  const removeWindow = useCallback(key => {
    setWindows(prevState => prevState.filter(window => window.key !== key));
  }, []);

  const customCommands = useMemo(() => [...actionCommands,
    {
      command: 'show cv',
      description: 'Shows the readable version of the CV',
      responseType: 'action',
      execute: () => {
        setWindows(prevState => [...prevState, createWindow(WindowContent.resume)]);
        return '';
      }
    }, {
      command: 'new terminal',
      description: 'Open a new terminal',
      responseType: 'action',
      execute: () => {
        setWindows(prevState => [...prevState, createWindow(WindowContent.terminal)]);
        return '';
      }
    }
  ], []);

  const [windows, setWindows] = useState([createWindow(WindowContent.terminal)]);

  return windows;
}
