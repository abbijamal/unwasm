import { imports } from "./_shared.mjs";
import { sum } from "@fixture/wasm/examples/sum.wasm";
import initRand, { rand } from "@fixture/wasm/examples/rand.wasm";

await initRand(imports);

export function test() {
  if (sum(1, 2) !== 3) {
    return "FALED: sum";
  }
  if (!(rand(0, 1000) > 0)) {
    return "FALED: rand";
  }
  return "OK";
}