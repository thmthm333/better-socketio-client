import { io, Manager } from "./index.js";

if (typeof io !== "function") {
  throw new Error("expected io to be a function");
}
if (typeof Manager !== "function") {
  throw new Error("expected Manager to be a constructor");
}

console.log("ok");
