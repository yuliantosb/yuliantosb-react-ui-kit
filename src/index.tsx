import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, say hello to TypeScript this is my first time tho.</div>
);

export default SayHello;
