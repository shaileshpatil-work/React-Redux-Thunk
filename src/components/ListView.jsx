import React from "react";

const ListView = props => {
  return (
    <ul>
      {props.list.map((items, i) => (
        <li key={i}>
          <span>{items}</span>
          <button onClick={() => props.delete(items)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
