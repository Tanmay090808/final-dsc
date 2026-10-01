import { CalendarDays, FolderKanban, Home, Mail, Users } from "lucide-react";

export const navigationItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Events", to: "/events", icon: CalendarDays },
  { label: "Team", to: "/team", icon: Users },
  { label: "Projects", to: "/projects", icon: FolderKanban },
  { label: "Contact", to: "/contact", icon: Mail },
];