import { MessageSquare } from "lucide-react";
import DiscordClone from "./pages/DiscordClone.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Discord Clone",
    to: "/",
    icon: <MessageSquare className="h-4 w-4" />,
    page: <DiscordClone />,
  },
];
