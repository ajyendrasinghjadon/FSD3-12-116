const f1 = () => {
  console.log("F1");
};

const f2 = () => {
  console.log("F2");
};

const f3 = () => {
  console.log("F3");
};

function main() {
  console.log("Start");
  setTimeout(f1, 1000);
  // setInterval(f2);
  setImmediate(f2);
  process.nextTick(f3);
  console.log("End");
}

main();
