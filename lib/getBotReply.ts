export function getBotReply(userMsg: string): string {
  if (/dairy[- ]?free/i.test(userMsg)) return "Okay! I'll mark some meals as dairy-free.";
  if (/hello|hi|hey/i.test(userMsg)) return "Hello! How can I help you with your meal plan?";
  if (/chicken/i.test(userMsg)) return "Chicken is a great source of protein!";
  if (/meal|plan/i.test(userMsg)) return "Would you like me to suggest a meal plan for your week?";
  return "I'm still learning! Try asking about allergies, meals, or groceries.";
}
