const client = require("./client");

client.connectFunc2();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = function (data) {
  // your code here
  console.log(data);

  if (data === "\u0003") {
    // If the user presses Ctrl+C (Unicode character \u0003), exit the program
    process.exit();
  }
};
