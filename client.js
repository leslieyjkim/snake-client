const { IP, PORT } = require("./constants");
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {});

  setInterval(() => {
    conn.write("Name: YJ🐍");
    conn.write("Move: up");
  }, 500);

  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connect: connect };
