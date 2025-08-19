"use client";
export function GroceryDrawer({ locale }: { locale: string }) {
  // Demo: show static list
  return (
    <div className="border-t bg-muted/50 px-6 py-2">
      <span className="font-medium">Grocery List</span>
      <ul className="ml-3 mt-1 text-sm list-disc">
        <li>Chicken breast</li>
        <li>Gluten-free pasta</li>
        <li>Tomatoes</li>
        <li>Olive oil</li>
      </ul>
      {/* TODO: pantry toggles, export, integrations */}
    </div>
  );
}
