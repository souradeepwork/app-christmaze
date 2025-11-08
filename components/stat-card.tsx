"use client";

import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  delta?: number;
  icon: LucideIcon;
  trend?: "up" | "down";
}

export function StatCard({ label, value, delta, icon: Icon, trend }: StatCardProps) {
  const isPositive = trend === "up" || (delta && delta > 0);
  const isNegative = trend === "down" || (delta && delta < 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="stat-card group cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-text-muted mb-1">{label}</p>
          <p className="text-3xl font-bold text-text-primary mb-2">{value}</p>

          {delta !== undefined && (
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  "text-sm font-medium",
                  isPositive && "text-primary-green",
                  isNegative && "text-primary-red"
                )}
              >
                {delta > 0 ? "+" : ""}
                {delta}%
              </span>
              <span className="text-xs text-text-muted">vs 7-day avg</span>
            </div>
          )}
        </div>

        <div
          className={cn(
            "p-3 rounded-lg transition-all group-hover:scale-110",
            isPositive && "bg-primary-green/10",
            isNegative && "bg-primary-red/10",
            !delta && "bg-surface"
          )}
        >
          <Icon
            className={cn(
              "w-6 h-6",
              isPositive && "text-primary-green",
              isNegative && "text-primary-red",
              !delta && "text-text-muted"
            )}
          />
        </div>
      </div>
    </motion.div>
  );
}
