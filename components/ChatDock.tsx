"use client";
import { useState } from "react";

function getBotReply(userMsg: string) {
  // Simple demo: echo or respond to keywords
  if (/dairy[- ]?free/i.test(userMsg)) return "Okay! I'll mark some meals as dairy-free.";
  if (/hello|hi|hey/i.test(userMsg)) return "Hello! How can I help you with your meal plan?";
  if (/chicken/i.test(userMsg)) return "Chicken is a great source of protein!";
  if (/meal|plan/i.test(userMsg)) return "Would you like me to suggest a meal plan for your week?";
  return "I'm still learning! Try asking about allergies, meals, or groceries.";
}

export function ChatDock({ locale }: { locale: string }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Hi! I can help you plan meals. Try: 'Make Tuesday dairy-free'." },
  ]);
  const [input, setInput] = useState("");
  const sendMessage = (msg: string) => {
    setMessages((prev) => [...prev, { role: "user", content: msg }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: getBotReply(msg) }
      ]);
    }, 600); // simulate "thinking"
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto p-4 space-y-2">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "assistant" ? "text-primary" : "text-foreground"}>
            <span className="font-bold">{m.role === "assistant" ? "PrepJoy" : "You"}:</span> {m.content}
          </div>
        ))}
      </div>
      <form
        className="flex border-t bg-background p-2"
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) {
            sendMessage(input.trim());
            setInput("");
          }
        }}
      >
        <input
          className="flex-1 px-2 py-1 rounded border"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="ml-2 px-3 py-1 rounded bg-primary text-primary-foreground" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
