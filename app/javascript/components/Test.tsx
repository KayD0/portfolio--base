import React from "react";
type Props = {greeting: string}
const Test: React.FC<Props> = ({greeting}) => {
  return (
    <div className="main">
      <p>greeting:{greeting}</p>
    </div>
  );
}
 
export default Test;