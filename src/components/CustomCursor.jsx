import React, { useEffect, useRef } from 'react';
import styles from '../styles/CustomCursor.module.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 1.3;

    const updatePosition = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      currentX += dx * speed;
      currentY += dy * speed;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(updatePosition);
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const hoverElements = document.querySelectorAll('.hover-trigger');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add(styles.active);
        text.textContent = el.getAttribute('data-cursor-text') || 'Click';
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove(styles.active);
        text.textContent = '';
      });
    });

    document.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className={styles.customCursor} ref={cursorRef}>
      <span className={styles.cursorText} ref={textRef}></span>
    </div>
  );
};

export default CustomCursor;
