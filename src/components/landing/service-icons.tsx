import {
  BarChart3,
  Code2,
  Megaphone,
  Palette,
  type LucideIcon,
} from "lucide-react";

export type ServiceIconId = "web" | "marketing" | "brand" | "performance";

export const serviceIcons: Record<ServiceIconId, LucideIcon> = {
  web: Code2,
  marketing: Megaphone,
  brand: Palette,
  performance: BarChart3,
};
