const net = require("net");

// establishes a connection with the game server
const moves = {
  n: "Name: YJ🐍",
  u: "Move: up",
  d: "Move: down",
  r: "Move: right",
  l: "Move: left",
};

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });
  conn.on("connect", () => {
    // conn.write("Name: YJ🐍");
  });
  // conn.write(moves.u);
  // setTimeout(() => {}, 500);
  // conn.write(moves.u); // not working
  setInterval(() => {
    conn.write("Name: YJ🐍");
    conn.write(moves.u);
  }, 100); // one direction continuously

  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connect: connect };
