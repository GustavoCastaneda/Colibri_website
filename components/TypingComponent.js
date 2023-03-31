import React, { useEffect, useState, useRef } from "react";

const style = {
  fontFamily: "Space mono, monospace",
  fontSize: ".9em",
  paddingLeft: "20px",
};

const lineSpacing = {
  lineHeight: "2.5em",
};

const ORIGINAL_LINES = [
  "function getPrice() public view returns (int){",
  "  (",
  "    uint80 roundID,",
  "    int price,",
  "    uint startedAt,",
  "    uint timeStap,",
  "    uint80 answeredInRound",
  "  ) = priceFeed.lastestRoundData();",
  "  return price;",
  "}",
];

const totalChars = ORIGINAL_LINES.reduce(
  (chars, line) => chars + line.length,
  0
);

function promiseDelay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getPartialLines(lines, charCount) {
  const copiedLines = [];
  let remainingChars = charCount;
  for (const line of lines) {
    if (remainingChars <= line.length) {
      copiedLines.push(line.slice(0, remainingChars));
      break;
    }
    remainingChars -= line.length;
    copiedLines.push(line);
  }
  return copiedLines;
}


export default function App() {
  const [lines, setLines] = useState([""]);
  const [cursorVisibility, setCursorVisibility] = useState(true);
  const [animationDone, setAnimationDone] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animationDone) {
          for (let typedChars = 0; typedChars <= totalChars; typedChars++) {
            await promiseDelay(50);
            setLines(getPartialLines(ORIGINAL_LINES, typedChars));
          }
          setTimeout(() => {
            setCursorVisibility(false);
          }, 500);
          setAnimationDone(true);
        }
      },
      { threshold: 0 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    const intervalId = setInterval(() => {
      setCursorVisibility((visibility) => !visibility);
    }, 500);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
    };
  }, [animationDone]);

  return (
    <div ref={textRef}>
      {lines.map((line, index) => (
        <p
          key={index}
          className="typing"
          style={{
            ...style,
            ...lineSpacing,
            paddingLeft: line.startsWith("  ") ? "50px" : "20px",
          }}
        >
          {line}
          {index === lines.length - 1 && cursorVisibility && (
            <span style={{ visibility: "visible" }}>|</span>
          )}
        </p>
      ))}
      {!cursorVisibility && <span style={{ visibility: "hidden" }}>|</span>}
    </div>
  );
}