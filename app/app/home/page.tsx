"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  TrendingUp,
  MessageSquare,
  PhoneMissed,
  Phone,
  MessageCircle,
  Bot,
  AlertCircle,
  Plus,
} from "lucide-react";
import { StatCard } from "@/components/stat-card";
import { RealtimeEvents } from "@/components/realtime-events";
import { kpiData, realtimeEvents, bookings, campaigns } from "@/lib/seed-data";

export default function HomePage() {
  const { today, trends, liveTraffic } = kpiData;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">
            Home
          </h1>
          <p className="text-text-muted">Real-time command center for your holiday hotline</p>
        </div>

      <div className="flex justify-end">
        <button className="btn-primary">
          <Plus className="w-4 h-4" />
          Create Campaign
        </button>
      </div>
    </div>

      {/* Live Traffic Chips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex gap-4"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg">
          <Phone className="w-4 h-4 text-primary-green" />
          <span className="text-sm font-medium">{liveTraffic.callsNow} Calls Now</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg">
          <MessageCircle className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium">{liveTraffic.smsNow} SMS Now</span>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg">
          <Bot className="w-4 h-4 text-primary-gold" />
          <span className="text-sm font-medium">{liveTraffic.activeAgents} Active Agents</span>
        </div>

        {liveTraffic.errors > 0 && (
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-red/10 border border-primary-red/30 rounded-lg">
            <AlertCircle className="w-4 h-4 text-primary-red" />
            <span className="text-sm font-medium text-primary-red">
              {liveTraffic.errors} Errors
            </span>
          </div>
        )}
      </motion.div>

      {/* Today's KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Bookings Confirmed"
          value={today.bookingsConfirmed}
          delta={trends.bookingsConfirmed}
          icon={Calendar}
          trend="up"
        />

        <StatCard
          label="Conversion Rate"
          value={`${today.conversionRate}%`}
          delta={trends.conversionRate}
          icon={TrendingUp}
          trend="up"
        />

        <StatCard
          label="Messages Sent"
          value={today.messagesSent}
          delta={trends.messagesSent}
          icon={MessageSquare}
          trend="up"
        />

        <StatCard
          label="Missed Calls"
          value={today.missedCalls}
          delta={trends.missedCalls}
          icon={PhoneMissed}
          trend="down"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Realtime Events */}
        <RealtimeEvents events={realtimeEvents} />

        {/* Bookings Today */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Bookings Today
          </h3>

          <div className="space-y-3">
            {bookings.slice(0, 5).map((booking) => (
              <div
                key={booking.id}
                className="flex items-center justify-between p-3 rounded-lg bg-surface/50 hover:bg-surface transition-all cursor-pointer"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-text-primary">
                    {booking.customerName}
                  </p>
                  <p className="text-xs text-text-muted">
                    {booking.partySize} guests • {booking.time}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded ${
                      booking.status === "confirmed"
                        ? "bg-primary-green/10 text-primary-green"
                        : "bg-primary-gold/10 text-primary-gold"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-2 text-sm font-medium text-primary-red hover:bg-primary-red/5 rounded-lg transition-all">
            View All Bookings →
          </button>
        </div>
      </div>

      {/* Promotions Timeline */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Promotions Timeline
        </h3>

        <div className="space-y-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="flex items-center justify-between p-4 rounded-lg bg-surface/50 hover:bg-surface transition-all cursor-pointer"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-text-primary mb-1">
                  {campaign.name}
                </p>
                <p className="text-xs text-text-muted">
                  {campaign.status === "sent" &&
                    `Delivered: ${campaign.delivered}/${campaign.recipients} • ${campaign.clicks} clicks • ${campaign.optOuts} opt-outs`}
                  {campaign.status === "scheduled" &&
                    `Scheduled for ${campaign.scheduledDate} • ${campaign.recipients} recipients`}
                  {campaign.status === "draft" && "Draft - Not scheduled"}
                </p>
              </div>

              <div className="flex items-center gap-3">
                {campaign.status === "sent" && (
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary-green">
                      {((campaign.clicks / campaign.delivered) * 100).toFixed(1)}%
                    </p>
                    <p className="text-xs text-text-muted">CTR</p>
                  </div>
                )}

                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    campaign.status === "sent"
                      ? "bg-primary-green/10 text-primary-green"
                      : campaign.status === "scheduled"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-text-muted/10 text-text-muted"
                  }`}
                >
                  {campaign.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Snowfall Effect (optional, subtle) */}
      <Snowfall />
    </div>
  );
}

// Simple snowfall component
function Snowfall() {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${10 + Math.random() * 10}px`,
          }}
        >
          ❄
        </div>
      ))}
    </>
  );
}
