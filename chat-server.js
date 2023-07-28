const net = require("node:net");

const createChatServer = () => {
  const chatServer = net.createServer();

  chatServer.listen(8000);
  chatServer.on("connection", (socket) => {
    socket.setEncoding("utf-8");
    console.log("Connection Established");

    socket.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });
};

createChatServer();