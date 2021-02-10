function promiseSample(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const n = parseInt(num, 10);
        if (isNaN(n)) throw new Error("not a number");
        resolve(n);
      } catch (e) {
        // rejectではなく例外throwでもOK
        reject(e);
      }
    }, 1000);
  });
}

const success = promiseSample(123);
const fail = promiseSample("aaa");
console.log("success", success);
console.log("fail", fail);

success
  .then((result) => console.log("successResult", result))
  .finally(() => console.log("success finish"));
fail
  .then((result) => console.log("failResult", result))
  .catch((e) => console.log("e", e))
  .finally(() => console.log("fail finish"));
