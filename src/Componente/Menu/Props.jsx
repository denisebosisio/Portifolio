import React from "react";

const Props = ({ title, modal }) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={modal}>Ativar</button>
    </div>
  );
};

export default Props;