import React from 'react';
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
import commands from './resources/commands.json';

export default function App() {
  return <Terminal commands={commands} actionCommands={actionCommands}/>;
}
