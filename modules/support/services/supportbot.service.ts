const getBotResponse = (input: string): string => {
  const lowerInput = input.toLowerCase();

  // Greeting responses
  if (lowerInput.includes("hello")) return "Hi there! How can I assist you?";
  if (lowerInput.includes("hi")) return "Hello! What can I do for you today?";
  if (lowerInput.includes("hey")) return "Hey! How's it going?";
  if (lowerInput.includes("good morning"))
    return "Good morning! How can I help you today?";
  if (lowerInput.includes("good evening"))
    return "Good evening! What can I assist you with?";

  // How are you responses
  if (lowerInput.includes("how are you"))
    return "I'm just a zadous Support Bot, but I'm doing great!";
  if (lowerInput.includes("how's it going"))
    return "I'm doing great, thanks for asking! How about you?";
  if (lowerInput.includes("how do you feel"))
    return "I don't have feelings, but I'm ready to help you!";
  if (lowerInput.includes("are you okay"))
    return "I'm functioning perfectly! Thanks for asking.";

  // Help responses
  if (lowerInput.includes("help")) return "Sure! What do you need help with?";
  if (lowerInput.includes("can you assist me"))
    return "Absolutely! What can I help you with?";
  if (lowerInput.includes("need assistance"))
    return "I'm here for you! What do you need assistance with?";

  // General inquiries
  if (lowerInput.includes("what's your name"))
    return "I am Zadous, your friendly support bot!";
  if (lowerInput.includes("who are you"))
    return "I'm Zadous, an AI created to help you!";
  if (lowerInput.includes("what can you do"))
    return "I can assist with various tasks, just let me know what you need!";

  // Goodbye responses
  if (lowerInput.includes("goodbye")) return "Goodbye! Have a great day!";
  if (lowerInput.includes("bye"))
    return "See you later! Let me know if you need anything else.";
  if (lowerInput.includes("talk to you later"))
    return "Looking forward to it! Take care!";
  if (lowerInput.includes("see you"))
    return "See you soon! Don't hesitate to reach out.";

  // Thank you responses
  if (lowerInput.includes("thank you"))
    return "You're welcome! I'm happy to help.";
  if (lowerInput.includes("thanks"))
    return "No problem! Let me know if you need anything else.";
  if (lowerInput.includes("thank you so much"))
    return "You're very welcome! I'm always here to assist.";

  // Apology responses
  if (lowerInput.includes("sorry"))
    return "No worries! How can I help you further?";
  if (lowerInput.includes("my bad"))
    return "No problem at all! Let's move forward.";

  // Inquiries about bot's functionality
  if (lowerInput.includes("what can you help with"))
    return "I can assist with any queries you may have. Just let me know!";
  if (lowerInput.includes("what do you know"))
    return "I have a vast knowledge base! I can help with tech, troubleshooting, and more.";

  // Encouragement responses
  if (lowerInput.includes("thank you for your help"))
    return "You're very welcome! Keep going!";
  if (lowerInput.includes("i appreciate it"))
    return "It's my pleasure! I'm glad to be of help.";

  // Clarification responses
  if (lowerInput.includes("can you explain"))
    return "Of course! What would you like me to clarify?";
  if (lowerInput.includes("what do you mean"))
    return "Let me explain it further! What part needs more clarification?";

  // Specific tech support
  if (lowerInput.includes("error"))
    return "I see you're experiencing an issue. Could you share more details so I can assist you better?";
  if (lowerInput.includes("bug"))
    return "It sounds like you're encountering a bug. Let me know the specifics and I’ll try to help!";
  if (lowerInput.includes("problem"))
    return "Let's figure out the issue. Can you tell me more about the problem?";

  // Question about time
  if (lowerInput.includes("what time is it"))
    return "I don't have access to time, but you can check your device!";
  if (lowerInput.includes("time"))
    return "I can't tell the time, but your device should have it!";

  // Weather inquiries
  if (lowerInput.includes("weather"))
    return "I can't check the weather, but you can use a weather app for that!";

  // Feedback requests
  if (lowerInput.includes("feedback"))
    return "I'd love to hear your feedback! How did I do today?";
  if (lowerInput.includes("rate"))
    return "If you could rate my help, that would be awesome!";

  // Humor responses
  if (lowerInput.includes("tell me a joke"))
    return "Why don't skeletons fight each other? They don't have the guts!";
  if (lowerInput.includes("make me laugh"))
    return "Sure! Why did the scarecrow win an award? Because he was outstanding in his field!";

  // Random inquiries
  if (lowerInput.includes("what's your favorite color"))
    return "I don't have a favorite color, but I hear blue is quite popular!";
  if (lowerInput.includes("do you like music"))
    return "I don't have ears, but I imagine I’d love music!";

  // Acknowledgment of unclear inputs
  if (lowerInput.includes("what do you mean"))
    return "I'm here to help! Could you clarify your question a bit?";
  if (lowerInput.includes("sorry, what"))
    return "No worries! Can you please ask your question again?";

  // User asking to stop or quit
  if (lowerInput.includes("stop"))
    return "Okay, I’ll stop here. Let me know if you need anything else.";
  if (lowerInput.includes("quit"))
    return "Sure! I'm always here if you need to talk again.";

  // Default response
  return "I'm not sure how to respond to that. Could you clarify or ask something else?";
};

export { getBotResponse };
