const net = require("node:net");

const createClient = () => {
  const messageChunk = { sender: "", receiver: "", message: "" };
  const client = net.createConnection(8000);
  client.setEncoding("utf-8");
  process.stdin.setEncoding("utf-8");

  process.stdin.on("data", data => {
    console.log(data.trim());
  });

  process.stdin.pipe(client);
  console.log("hello");
};

createClient();