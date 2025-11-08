"use client";

import { Bell, Search, HelpCircle, MapPin, Calendar } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-16 border-b border-border bg-surface/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left: Location & Date */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-border">
            <MapPin className="w-4 h-4 text-primary-red" />
            <span className="text-sm font-medium">Snow Town</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-border">
            <Calendar className="w-4 h-4 text-text-muted" />
            <span className="text-sm">Last 7 days</span>
          </div>
        </div>

        {/* Right: Search, Notifications, Help */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button className="flex items-center gap-2 px-4 py-2 bg-background rounded-lg border border-border hover:border-primary-red/30 transition-all">
            <Search className="w-4 h-4 text-text-muted" />
            <span className="text-sm text-text-muted">Search... ⌘K</span>
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-background rounded-lg transition-all">
            <Bell className="w-5 h-5 text-text-muted" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-red rounded-full"></span>
          </button>

          {/* Help */}
          <button className="p-2 hover:bg-background rounded-lg transition-all">
            <HelpCircle className="w-5 h-5 text-text-muted" />
          </button>

          {/* User */}
          <div className="flex items-center gap-3 pl-3 ml-3 border-l border-border">
            <div className="text-right">
              <p className="text-sm font-medium">Owner</p>
              <p className="text-xs text-text-muted">owner@northpolecafe.com</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-red to-primary-green rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">NP</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
