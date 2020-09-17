const Calculator = () => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  return {
    add, subtract, divide, multiply,
  };
};

const calculator = new Calculator();

export default calculator;