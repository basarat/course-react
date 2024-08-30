/** Mimic a backend api */
export const getWordCount = async (value: string) => {
  const duration = value == "hello" ? 3000 : 1000;
  await new Promise((res) => setTimeout(res, duration));
  return value.trim().split(" ").length;
};
