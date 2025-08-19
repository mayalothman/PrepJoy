"use client";
import { useState } from "react";
export function MealCard({ meal }: { meal: any }) {
  const [like, setLike] = useState<0 | 1 | -1>(0);
  if (!meal) return <div className="h-16" />;
  return (
    <div className="rounded-xl bg-card shadow flex flex-col items-start p-3 gap-1 min-h-16">
      <div className="font-semibold">{meal.title}</div>
      <div className="flex gap-1">
        {meal.flags?.map((flag: string) => (
          <span
            key={flag}
            className="inline-block bg-muted px-2 py-0.5 rounded-full text-xs font-medium"
          >
            {flag}
          </span>
        ))}
      </div>
      <div className="text-xs text-muted-foreground">{meal.prepMinutes} min</div>
      <div className="mt-1 flex gap-2">
        <button onClick={() => setLike(like === 1 ? 0 : 1)} className={like === 1 ? "text-green-600" : ""}>👍</button>
        <button onClick={() => setLike(like === -1 ? 0 : -1)} className={like === -1 ? "text-red-600" : ""}>👎</button>
      </div>
    </div>
  );
}
