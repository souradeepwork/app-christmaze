"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  MessageSquare,
  Calendar,
  Package,
  Megaphone,
  Brain,
  Phone,
  BarChart3,
  CreditCard,
  Settings,
  Users,
  ShieldCheck,
  Puzzle,
  FileText,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/app/home", icon: Home },
  { name: "Conversations", href: "/app/conversations", icon: MessageSquare },
  { name: "Bookings", href: "/app/bookings", icon: Calendar },
  { name: "Catalog", href: "/app/catalog", icon: Package },
  { name: "Campaigns", href: "/app/campaigns", icon: Megaphone },
  { name: "Knowledge", href: "/app/knowledge", icon: Brain },
  { name: "Numbers", href: "/app/numbers", icon: Phone },
  { name: "Analytics", href: "/app/analytics", icon: BarChart3 },
  { name: "Billing", href: "/app/billing", icon: CreditCard },
  { name: "Settings", href: "/app/settings", icon: Settings },
  { name: "Users & Roles", href: "/app/users", icon: Users },
  { name: "Verifications", href: "/app/verifications", icon: ShieldCheck },
  { name: "Integrations", href: "/app/integrations", icon: Puzzle },
  { name: "Audit Log", href: "/app/audit", icon: FileText },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-surface border-r border-border flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-red to-primary-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-text-primary">Christmaze</h1>
            <p className="text-xs text-text-muted">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "sidebar-item",
                isActive ? "sidebar-item-active" : "sidebar-item-inactive"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="text-xs text-text-muted">
          <p>North Pole Café</p>
          <p className="text-primary-green">Growth Plan • Active</p>
        </div>
      </div>
    </aside>
  );
}
