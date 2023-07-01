import styled from "styled-components";
const Ul = styled.ul`
  padding: 0px;
`;
const li = styled.li`
  color: red;
`;
const ListGroup2 = () => {
  const items = ["Hay", "Hi"];
  return (
    <>
      <Ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </Ul>
    </>
  );
};

export default ListGroup2;
