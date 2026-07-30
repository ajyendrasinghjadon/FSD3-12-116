import {EventEmitter} from "events";

const form = new EventEmitter();

form.on("submit", (uname, password) => {
    console.log("Form Submitted");
    console.log(`username: ${uname}`);
    console.log(`password: ${password}`);
});

form.emit("submit", "Ajyendra", "191919 😂😂")