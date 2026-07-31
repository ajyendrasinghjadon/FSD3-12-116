const f1 = () => {
  console.log("Hello F1");
}

const f2 = () => {
  console.log("Hello F2");
}

function main() {
    console.log("Start");
    setTimeout(f1, 0);
    new Promise((resolve, reject) => {
        // Promise logic here
    });
}