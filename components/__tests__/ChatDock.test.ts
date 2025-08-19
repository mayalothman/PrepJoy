import { getBotReply } from "../ChatDock";

describe("getBotReply", () => {
  test("dairy free", () => {
    expect(getBotReply("dairy free")).toBe("Okay! I'll mark some meals as dairy-free.");
  });

  test("hello", () => {
    expect(getBotReply("hello")).toBe("Hello! How can I help you with your meal plan?");
  });

  test("unknown input", () => {
    expect(getBotReply("what's up?")).toBe("I'm still learning! Try asking about allergies, meals, or groceries.");
  });
});

