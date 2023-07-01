import { MouseEvent, useState } from "react";
export default function ListGroup() {
  const items = ["Cake", "Moi moi", "Bread", "Milk"];
  // Creating an event handler
  // useState hook
  const [active, setActive] = useState(0);
  return (
    <>
      <h1>Hello</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === active ? "list-group-item active" : "list-group-item"
            }
            // setActive updates active based on the index passed
            onClick={() => setActive(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
