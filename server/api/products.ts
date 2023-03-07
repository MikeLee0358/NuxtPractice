import data from "./procuts.json";

export default defineEventHandler(async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 3000);
  });
});
