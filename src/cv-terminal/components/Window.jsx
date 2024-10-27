import React, { useCallback, useEffect, useRef } from 'react';
import { useEventContext } from '../libs/EventContext';
import { dragElement } from '../libs/draggable';
import * as style from './Window.module.css';

export default function Window({ children }) {

  const windowRef = useRef();
  const MouseEmitter = useEventContext();

  MouseEmitter.on('mousedown', e => {
    if (windowRef.current === e) {
      windowRef.current.classList.add(style['window--active']);
    } else {
      windowRef.current.classList.remove(style['window--active']);
    }
  });

  const handleMouseDown = useCallback(() => {
    MouseEmitter.emit('mousedown', windowRef.current);
  });

  const handleResize = useCallback(() => {
    windowRef.current.lastChild.classList.remove('mobile', 'tablet');
    let rect = windowRef.current.getBoundingClientRect();
    if (rect.width <= 380) {
      windowRef.current.lastChild.classList.add('mobile');
    } else if (rect.width <= 768) {
      windowRef.current.lastChild.classList.add('tablet');
    }
    // let rect = windowRef.current.getBoundingClientRect();
    // if (rect.x + rect.width > window.innerWidth)
    //   windowRef.current.style.width = window.innerWidth - rect.x + 'px';
    // if (rect.y + rect.height > window.innerHeight)
    //   windowRef.current.style.height = window.innerHeight - rect.y + 'px';
    // console.log(windowRef.current.style.width, windowRef.current.style.height);
    // console.log(window.innerWidth, window.innerHeight);
  });

  useEffect(() => {
    if (!windowRef) {
      return;
    }
    const dragElementClean = dragElement(windowRef.current);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(windowRef.current);

    return () => {
      resizeObserver.disconnect();
      dragElementClean();
    };
  }, [windowRef]);

  return (
    <div className={style.window} ref={windowRef} onMouseDown={handleMouseDown}>
      <div className={style.window__header}>
        <div className={`${style['fake-button']} ${style['fake-button--close']}`}></div>
        <div className={`${style['fake-button']} ${style['fake-button--minimize']}`}></div>
        <div className={`${style['fake-button']} ${style['fake-button--zoom']}`}></div>
      </div>
      <div className={style.window__body}>
        {children}
      </div>
    </div>
  );
}
