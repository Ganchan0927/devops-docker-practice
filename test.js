const { add } = require("./app");

if (add(2, 3) !== 5) {
  console.log("Test failed");
  process.exit(1);
} else {
  console.log("Test passed");
}
``