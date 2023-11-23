let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (data) {
  console.log(data);
  let output = "";
  if (data === "\u0003") {
    // If the user presses Ctrl+C (Unicode character \u0003), exit the program
    process.exit();
  } else {
    switch (data) {
      case "1":
        output = "Say: Still Hungry!";
        break;
      case "2":
        output = "Say: Still Going!";
        break;
      case "w":
        output = "Move: up";
        break;
      case "a":
        output = "Move: left";
        break;
      case "s":
        output = "Move: down";
        break;
      case "d":
        output = "Move: right";
        break;
    }
    console.log(output);
    connection.write(output);
  }
  return output;
};

module.exports = { setupInput: setupInput };
