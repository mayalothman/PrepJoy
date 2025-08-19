"use client";
import { useState } from "react";
import { MemberEditor } from "./MemberEditor";

export function SidebarSettings() {
  // Demo toggles and settings, to be replaced with live state
  const [allergens, setAllergens] = useState<string[]>([]);
  const allergenList = ["gluten", "lactose", "nuts", "shellfish", "egg", "soy", "sesame"];
  return (
    <div className="p-6 flex flex-col gap-4">
      <h2 className="font-bold text-lg mb-2">Settings</h2>
      <div>
        <div className="font-medium mb-1">Allergens</div>
        <div className="flex flex-wrap gap-2">
          {allergenList.map((a) => (
            <button
              key={a}
              className={`px-3 py-1 rounded-full text-sm border ${allergens.includes(a) ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              onClick={() =>
                setAllergens((prev) =>
                  prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
                )
              }
            >
              {a}
            </button>
          ))}
        </div>
      </div>
      <MemberEditor members={[{ name: "Luna", ageGroup: "child" }]} />
      {/* TODO: Add diet, cuisine, accessibility, and member selectors */}
    </div>
  );
}
