console.log("hello ai")

class Captain  {
  constructor(){
    this.hasRecievedCommand = false;
  }

  inform(newMap) {
    console.log("Captain listenForMapUpdate", newMap);
    return this.hasRecievedCommand ? "informed" : "clueless"
  }

  command(c) {
    console.log("Captain listenForCommands", c);
    this.hasRecievedCommand = true
    return "hello listenForCommands"
  }
}

module.exports = Captain
