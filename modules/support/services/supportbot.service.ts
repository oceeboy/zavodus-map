const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes("hello")) return "Hi there! How can I assist you?";
  if (lowerInput.includes("how are you"))
    return "I'm just a zadous Support Bot, but I'm doing great!";
  if (lowerInput.includes("help")) return "Sure! What do you need help with?";
  return "I'm not sure how to respond to that.";
};

export { getBotResponse };
