import { useState } from 'react';

function Calculator() {
  const [display, setDisplay] = useState("");

  const handleClick = (btn) => {
    if (btn === "c" || btn === "C") {
      setDisplay("");
    } else if (btn === "=") {
      try {
        setDisplay(calculate(display).toString());
      } catch (error) {
        alert(error.message);
        setDisplay("");
      }
    } else {
      setDisplay(display + btn);
    }
  };

  function calculate(expression) {
    const validExpression = /^(\d+)([+\-*/])(\d+)$/;
    const match = expression.match(validExpression);

    if (!match) {
      throw new Error('無効な式です。');
    }

    const num1 = Number(match[1]);
    const operator = match[2];
    const num2 = Number(match[3]);

    switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num1 / num2;
    }
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', 'C', '=', '+'
  ];

  return (
    <>
      <h2>電卓アプリ</h2>
      <div className="display">
        {display === "" ? "0" : display}
      </div>
    <div className="button-grid">
      {buttons.map((btn) => (
        <button key={btn} onClick={() => handleClick(btn)}>
          {btn}
        </button>
      ))}
      </div>
    </>
  );
}

export default Calculator;