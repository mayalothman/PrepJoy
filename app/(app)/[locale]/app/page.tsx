import { SidebarSettings } from "@/components/SidebarSettings";
import { CalendarGrid } from "@/components/CalendarGrid";
import { ChatDock } from "@/components/ChatDock";
import { GroceryDrawer } from "@/components/GroceryDrawer";
import { getTranslations } from "@/lib/i18n";
import { cookies } from "next/headers";

export default async function AppPage({ params }: { params: { locale: string } }) {
  const t = await getTranslations(params.locale ?? "en");
  // TODO: hydrate with real household, member, plan data from API
  // For now, demo data:
  const demoMeals = [
    { id: "1", title: "Chicken Shawarma", flags: ["halal", "kidFriendly"], prepMinutes: 25 },
    { id: "2", title: "Gluten-Free Pasta", flags: ["glutenFree", "vegetarian"], prepMinutes: 20 },
  ];
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left Sidebar: Settings */}
      <aside className="w-72 border-r bg-muted/50">
        <SidebarSettings />
      </aside>
      {/* Center: Calendar */}
      <main className="flex-1 flex flex-col">
        <CalendarGrid locale={params.locale} meals={demoMeals} />
        <GroceryDrawer locale={params.locale} />
      </main>
      {/* Right: Chatbot Dock (desktop only, responsive) */}
      <aside className="w-96 border-l bg-muted/50 hidden lg:flex flex-col">
        <ChatDock locale={params.locale} />
      </aside>
    </div>
  );
}
