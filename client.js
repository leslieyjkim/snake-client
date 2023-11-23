const net = require("net");

// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });
  conn.on("connect", () => {
    console.log("Name:  YJ🐍");
    conn.write("Name: YJ🐍");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connectFunc2: connect };
