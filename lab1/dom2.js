import {EventEmitter} from "events";

const button = new EventEmitter();

button.on("hello", () => {
    console.log("Hello World 1");
})

button.on("hello", () => {
    console.log("Hello World 2");
})

button.emit("hello");