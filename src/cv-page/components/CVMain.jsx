import React from 'react';
import CVLeft from './CVLeft';
import CVRight from './CVRight';

export default function CVMain() {
  return (
    <main className="resume bd-container">
      <CVLeft />
      <CVRight />
    </main>
  );
}
