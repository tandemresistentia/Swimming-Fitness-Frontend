import React, { useEffect, useRef } from 'react';
import './Paragraph.css';

const Paragraph = ({ content }) => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const paragraphElement = paragraphRef.current;
    paragraphElement.classList.add('animate');

    return () => {
      paragraphElement.classList.remove('animate');
    };
  }, []);

  const getWords = () => {
    return content.split(' ');
  };

  const getLastWord = () => {
    const words = getWords();
    return words[words.length - 1];
  };

  return (
    <p ref={paragraphRef} className="custom-paragraph">
      {getWords().map((word, index) => (
        <span
          key={index}
          className={word === getLastWord() ? 'last-word' : ''}
        >
          {word}{' '}
        </span>
      ))}
    </p>
  );
};

export default Paragraph;