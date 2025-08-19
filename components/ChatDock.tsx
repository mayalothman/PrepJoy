"use client";
import { useState } from "react";

export function ChatDock({ locale }: { locale: string }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "👋 Hi! I can help you plan meals. Try: 'Make Tuesday dairy-free'." },
  ]);
  const [input, setInput] = useState("");
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
            setMessages([...messages, { role: "user", content: input }]);
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
