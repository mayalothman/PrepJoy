"use client";
import { useState } from "react";
import { MealCard } from "./MealCard";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const slots = ["breakfast", "lunch", "dinner", "snack"];

export function CalendarGrid({
  locale,
  meals: initialMeals,
}: {
  locale: string;
  meals: any[];
}) {
  const [grid, setGrid] = useState(() =>
    slots.map((slot, i) =>
      days.map((day, j) => initialMeals[(i + j) % initialMeals.length])
    )
  );
  const [dragged, setDragged] = useState<{ slot: number; day: number } | null>(null);

  return (
    <section className="flex-1 overflow-auto p-6">
      <table className="w-full border text-center rounded-lg bg-background">
        <thead>
          <tr>
            <th className="w-24"></th>
            {days.map((d) => (
              <th key={d} className="py-2 font-semibold">{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slots.map((slot, i) => (
            <tr key={slot}>
              <td className="text-right pr-2 font-medium capitalize">{slot}</td>
              {days.map((day, j) => (
                <td
                  key={day + slot}
                  className="align-top"
                  draggable
                  onDragStart={() => setDragged({ slot: i, day: j })}
                  onDragOver={e => { e.preventDefault(); }}
                  onDrop={() => {
                    if (dragged && (dragged.slot !== i || dragged.day !== j)) {
                      const newGrid = grid.map(row => [...row]);
                      const temp = newGrid[i][j];
                      newGrid[i][j] = newGrid[dragged.slot][dragged.day];
                      newGrid[dragged.slot][dragged.day] = temp;
                      setGrid(newGrid);
                    }
                    setDragged(null);
                  }}
                >
                  <MealCard meal={grid[i][j]} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
