import confetti from 'canvas-confetti';
import Fireworks from 'fireworks-js';
import { stringToDom } from './stringToDom';
import { darkMode } from './darkMode';

export const actionCommands = [
  {
    command: 'dark',
    description: 'Set dark theme',
    responseType: 'action',
    execute: () => {
      if (darkMode(true)) {
        return 'You are now in dark mode.';
      }
      return 'You are already in dark mode.';
    }
  },
  {
    command: 'light',
    description: 'Set light theme',
    responseType: 'action',
    execute: () => {
      if (darkMode(false)) {
        return 'Your are now in light mode.';
      }
      return 'You are already in light mode.';
    }
  },
  // {
  //   command: 'get cv',
  //   description: 'Download CV',
  //   responseType: 'action',
  //   execute: () => {}
  // },
  {
    command: 'pif',
    responseType: 'action',
    execute: () => {
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
      };
      function fire(particleRatio, opts) {
        confetti(
          Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
          })
        );
      }
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
      return 'Let\'s go !';
    }
  },
  {
    command: 'rm -rf /',
    responseType: 'action',
    execute: () => {
      if (!document.body.classList.contains('firework')) {
        document.body.classList.add('firework');
        darkMode(true);
        const fireworks = new Fireworks(document.body, {
          mouse: { click: true, move: false, max: 7 },
        });
        fireworks.start();
      }
      return '🎆';
    }
  },
  // {
  //   command: 'hohoho',
  //   responseType: 'action',
  //   execute: () => {
  //     return '🎅🎁';
  //   }
  // },
  {
    command: 'boo',
    responseType: 'action',
    execute: () => {
      if (!document.body.classList.contains('halloween')) {
        // add image
        const imageUrl = new URL(
          '../../common/images/halloween-bg.jpg',
          import.meta.url
        );
        const html = `<img src="${imageUrl}" class="halloween-bg" alt="Halloween background" />`;
        document.body.prepend(stringToDom(html));
        document.body.classList.add('halloween');
        darkMode(true);
      }
      return '🎃';
    }
  }
];
