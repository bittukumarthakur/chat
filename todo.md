## to create a client.
node client.js name;

## how i interact.
call: friend-name; ==> 
=> call connected;
message;
=> friend-name: message;
messageChunk => {
  sender: name,
  receiver: name,
  message: message
}
## friend's display.
=> friend-name: message;
call: friend-name;
=> call connected;
message;

## server.
=> clients => {
  name1: socket1,
  name2: socket2
};