import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function UsingProps({ items, heading }: Props) {
  const [active, setActive] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            onClick={() => setActive(index)}
            className={
              index === active ? "list-group-item active" : "list-group-item"
            }
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsingProps;
