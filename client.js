const net = require("node:net");

const createClient = function (sender) {
  const messageChunk = { sender, receiver: "", message: "" };
  const client = net.createConnection(8000);
  process.stdin.setEncoding("utf-8");
  client.setEncoding("utf-8");

  client.on('connect', () => {
    console.log('=> Connected to Server');
    client.write(JSON.stringify({ sender }));
  });

  client.on('data', data => {
    console.log(data);
  })

  process.stdin.on("data", data => {
    const isConnectCommand = (/ *connect *:/).test(data);

    if (isConnectCommand) {
      const [_, receiver] = data.trim().split(":");
      messageChunk.receiver = receiver;
      console.log('=> Connect Connected');
      return;
    }

    messageChunk.message = data.trim();
    client.write(JSON.stringify(messageChunk));
  });
};

createClient(...process.argv.slice(2));