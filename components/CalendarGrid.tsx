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
  // grid[slot][day]: meal object or null
  const [grid, setGrid] = useState(() =>
    slots.map((slot, i) =>
      days.map((day, j) => initialMeals[(i + j) % initialMeals.length])
    )
  );
  const [dragged, setDragged] = useState<{ slot: number; day: number } | null>(null);
  const [newMealTitle, setNewMealTitle] = useState("");
  const [selectedCell, setSelectedCell] = useState<{ slot: number; day: number } | null>(null);

  // Add meal to selected cell
  function addMeal(title: string) {
    if (!selectedCell) return;
    const meal = { id: Date.now().toString(), title, flags: [], prepMinutes: 10 };
    setGrid(g =>
      g.map((row, i) =>
        row.map((cell, j) =>
          i === selectedCell.slot && j === selectedCell.day ? meal : cell
        )
      )
    );
    setSelectedCell(null);
    setNewMealTitle("");
  }

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
                  className="align-top cursor-pointer"
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
                  onClick={() => setSelectedCell({ slot: i, day: j })}
                >
                  <MealCard meal={grid[i][j]} />
                  {selectedCell &&
                    selectedCell.slot === i &&
                    selectedCell.day === j && (
                      <form
                        className="mt-2"
                        onSubmit={e => {
                          e.preventDefault();
                          if (newMealTitle.trim()) addMeal(newMealTitle.trim());
                        }}
                      >
                        <input
                          className="border px-2 py-1 rounded text-sm"
                          value={newMealTitle}
                          onChange={e => setNewMealTitle(e.target.value)}
                          placeholder="New meal title"
                          autoFocus
                        />
                        <button className="ml-2 px-2 py-1 bg-primary text-primary-foreground rounded text-sm" type="submit">
                          Add
                        </button>
                        <button className="ml-2 text-xs text-gray-500" type="button" onClick={() => setSelectedCell(null)}>
                          Cancel
                        </button>
                      </form>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
