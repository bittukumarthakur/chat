const net = require("node:net");

const createClient = function (name) {
  const messageChunk = { sender: name, receiver: "", message: "" };
  const client = net.createConnection(8000);
  process.stdin.setEncoding("utf-8");
  client.setEncoding("utf-8");

  client.on('connect', () => {
    console.log('=> Connected to Server');
  });

  process.stdin.on("data", data => {
    const isCallCommand = (/ *call *:/).test(data);

    if (isCallCommand) {
      const [_, receiver] = data.trim().split(":");
      messageChunk.receiver = receiver;
      console.log('=> Call Connected');
      return;
    }

    messageChunk.message = data.trim();
    client.write(JSON.stringify(messageChunk));
  });
};

createClient(...process.argv.slice(2));