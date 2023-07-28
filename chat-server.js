const net = require("node:net");

const createChatServer = () => {
  const chatServer = net.createServer();

  chatServer.listen(8000);
  chatServer.on("connection", () => {
    console.log("Connection Established");
  });
};

createChatServer();