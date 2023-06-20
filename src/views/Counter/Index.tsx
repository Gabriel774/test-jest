import { useState } from "react";
import "./styles.css";
import Button from "../../components/Button";

function Counter() {
  const [count, setCount] = useState(0);

  const getColor = () => (count > 0 ? "green" : count < 0 ? "tomato" : "white");

  return (
    <>
      <h1 style={{ color: getColor() }} data-testid="count" id="count">
        {count}
      </h1>

      <div className="btn-container">
        <Button
          testID="button-increment"
          color="green"
          label="+"
          onClick={() => setCount(count + 1)}
        />
        <Button
          testID="button-decrement"
          color="tomato"
          label="-"
          onClick={() => setCount(count - 1)}
        />
      </div>
    </>
  );
}

export default Counter;
