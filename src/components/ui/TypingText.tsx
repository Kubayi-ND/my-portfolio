import React, { useEffect, useState } from "react";

interface TypingTextProps {
  className?: string;
  typingSpeed?: number; // ms per character
}

const TYPING_TEXT = "Graduate Software Developer";

export const TypingText: React.FC<TypingTextProps> = ({ className = "", typingSpeed = 60 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(TYPING_TEXT.substring(0, i));
      if (i >= TYPING_TEXT.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [typingSpeed]);

  return (
    <span className={className}>
      {displayed}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export default TypingText;
