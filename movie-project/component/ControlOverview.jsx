import { useState } from "react";

const MAX_LENGTH = 150;

const ControlOverview = ({ text, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= MAX_LENGTH) {
    return <p className={className}>{text}</p>;
  }

  const shortText = text.substring(0, MAX_LENGTH) + "...";

  const displayText = isExpanded ? text : shortText;

  return (
    <div className={className}>
      <p>{displayText}</p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="hover:text-blue-400 text-blue-300 mt-1"
      >
        {isExpanded ? "간략히 보기" : "...더 보기"}
      </button>
    </div>
  );
};

export default ControlOverview;
