const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
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
