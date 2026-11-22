import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "You don't have to hold everything tonight. The chair has you. The floor has you. " +
  "Your shoulders can drop an inch. Breathe the way you already breathe. " +
  "You are held the way a blanket holds a sleeping cat: loosely, completely. " +
  "There is nowhere else to be.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
