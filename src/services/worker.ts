import { parentPort } from "node:worker_threads";
// const { parentPort } =  require("worker_threads");

function sendCounterToMainThread(){
    let counter = 0;
    for (let i = 0; i < 20_000_000_000; i++) {
      counter++;
    }
    if(parentPort){
        parentPort.postMessage(counter);
    }
}

sendCounterToMainThread();

// (async () => {
//     const { parentPort } = await import("worker_threads");

//     function sendCounterToMainThread() {
//         let counter = 0;
//         for (let i = 0; i < 20_000_000_000; i++) {
//             counter++;
//         }
//         if (parentPort) {
//             parentPort.postMessage(counter);
//         }
//     }

//     sendCounterToMainThread();
// })();