"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, DollarSign, MessageSquare, Send } from "lucide-react";
import { formatTime } from "@/lib/utils";

interface Event {
  id: string;
  type: string;
  timestamp: string;
  data: any;
}

interface RealtimeEventsProps {
  events: Event[];
}

const eventIcons = {
  "BOOKING.CONFIRMED": CheckCircle2,
  "PAYMENT.PAID": DollarSign,
  "CONVO.CREATED": MessageSquare,
  "CAMPAIGN.SENT": Send,
};

const eventColors = {
  "BOOKING.CONFIRMED": "text-primary-green",
  "PAYMENT.PAID": "text-primary-gold",
  "CONVO.CREATED": "text-blue-400",
  "CAMPAIGN.SENT": "text-primary-red",
};

export function RealtimeEvents({ events }: RealtimeEventsProps) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Realtime Stream</h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse"></div>
          <span className="text-xs text-text-muted">Live</span>
        </div>
      </div>

      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        <AnimatePresence>
          {events.map((event, index) => {
            const Icon = eventIcons[event.type as keyof typeof eventIcons] || MessageSquare;
            const colorClass = eventColors[event.type as keyof typeof eventColors] || "text-text-muted";

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface/50 transition-all cursor-pointer border border-transparent hover:border-border"
              >
                <div className={cn("p-2 rounded-lg bg-background", colorClass)}>
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-sm font-medium text-text-primary truncate">
                      {event.type.replace(/\./g, " ")}
                    </p>
                    <span className="text-xs text-text-muted whitespace-nowrap">
                      {formatTime(event.timestamp)}
                    </span>
                  </div>

                  <p className="text-xs text-text-muted truncate">
                    {event.type === "BOOKING.CONFIRMED" &&
                      `${event.data.customerName} • ${event.data.partySize} guests • ${event.data.time}`}
                    {event.type === "PAYMENT.PAID" &&
                      `$${event.data.amount} from ${event.data.customerName}`}
                    {event.type === "CONVO.CREATED" &&
                      `${event.data.from} • ${event.data.channel}`}
                    {event.type === "CAMPAIGN.SENT" &&
                      `${event.data.campaignName} • ${event.data.recipients} recipients`}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}
