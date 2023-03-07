export const useMyStore = defineStore("myStore", () => {
  const a = useState("w", () => {
    console.log("use");
    return 20;
  });

  return {
    a,
  };
});
