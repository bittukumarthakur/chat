const net = require("node:net");

const createChatServer = () => {
  const chatServer = net.createServer();
  const clients = {};
  chatServer.listen(8000);

  chatServer.on("connection", (socket) => {
    socket.setEncoding("utf-8");

    console.log("Connection Established");

    socket.on("data", (data) => {
      const messageChunk = JSON.parse(data);
      const { sender, receiver, message } = messageChunk;

      if (!(sender in clients)) {
        clients[sender] = socket;
      }

      if (message) {
        clients[receiver].write(`${sender}<< ${message}`);
      }
    });
  });
};

createChatServer();