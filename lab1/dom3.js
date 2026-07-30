import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", (uname) => {
  console.log(`Button clicked by ${uname}`);
});

button.emit("click", "Ajyendra");
button.emit("click", "Mayank");
button.emit("click", "Rishi");
button.emit("click");
