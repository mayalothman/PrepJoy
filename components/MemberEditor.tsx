"use client";
import { useState } from "react";

export function MemberEditor({ members: initialMembers }: { members: any[] }) {
  const [members, setMembers] = useState(initialMembers);
  const [name, setName] = useState("");
  return (
    <div className="space-y-2">
      <div className="font-medium">Household Members</div>
      <ul className="space-y-1">
        {members.map((m, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="rounded bg-muted px-2 py-1">{m.name}</span>
            <span className="text-xs text-muted-foreground">{m.ageGroup}</span>
          </li>
        ))}
      </ul>
      <form
        className="flex gap-2 mt-2"
        onSubmit={e => {
          e.preventDefault();
          if (name.length > 0) {
            setMembers([...members, { name, ageGroup: "child" }]);
            setName("");
          }
        }}
      >
        <input
          type="text"
          className="border px-2 py-1 rounded text-sm"
          value={name}
          placeholder="Add member..."
          onChange={e => setName(e.target.value)}
        />
        <button className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
