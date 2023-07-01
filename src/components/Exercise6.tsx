import React, { useState } from "react";
interface Props {
  children: string;
  maxChars?: number;
}

const Exercise6 = ({ children, maxChars = 20 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = children.substring(0, maxChars);
  const expandedText = children.substring(0);
  return (
    <div>
      <p>
        <span>{isExpanded ? expandedText : text + "..."} </span>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    </div>
  );
};

export default Exercise6;
