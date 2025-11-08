"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Phone,
  MessageSquare,
  Calendar,
  Target,
  Users,
  Download,
} from "lucide-react";
import { analyticsData } from "@/lib/seed-data";

export default function AnalyticsPage() {
  const { overview, intents, languageSplit } = analyticsData;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Analytics</h1>
          <p className="text-text-muted">Value proof and performance insights</p>
        </div>

        <div className="flex gap-2">
          <button className="btn-secondary">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Overview KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-text-muted">Calls Handled</p>
            <Phone className="w-4 h-4 text-primary-green" />
          </div>
          <p className="text-3xl font-bold text-text-primary mb-1">
            {overview.callsHandled}
          </p>
          <p className="text-xs text-text-muted">
            Avg response: {overview.avgResponseTime}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-text-muted">Bookings</p>
            <Calendar className="w-4 h-4 text-primary-red" />
          </div>
          <p className="text-3xl font-bold text-text-primary mb-1">
            {overview.bookings}
          </p>
          <p className="text-xs text-text-muted">
            Conversion: {overview.conversionRate}%
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-text-muted">Campaign ROI</p>
            <TrendingUp className="w-4 h-4 text-primary-gold" />
          </div>
          <p className="text-3xl font-bold text-text-primary mb-1">
            {overview.campaignROI}%
          </p>
          <p className="text-xs text-text-muted">
            Opt-out rate: {overview.optOutRate}%
          </p>
        </motion.div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Intents */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Top Intents
          </h3>

          <div className="space-y-3">
            {intents.map((intent, index) => (
              <motion.div
                key={intent.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-text-primary">
                    {intent.name}
                  </span>
                  <span className="text-sm text-text-muted">
                    {intent.count} ({intent.percentage}%)
                  </span>
                </div>

                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${intent.percentage}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className={`h-full rounded-full ${
                      index === 0
                        ? "bg-primary-red"
                        : index === 1
                        ? "bg-primary-green"
                        : index === 2
                        ? "bg-primary-gold"
                        : "bg-text-muted"
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Language Split */}
        <div className="card">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Language Split
          </h3>

          <div className="flex items-center justify-center h-64">
            <div className="relative w-48 h-48">
              {/* Simple pie chart representation */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-primary-red"
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0%, ${
                      50 + 50 * Math.sin((languageSplit.en / 100) * 2 * Math.PI)
                    }% ${
                      50 - 50 * Math.cos((languageSplit.en / 100) * 2 * Math.PI)
                    }%, 50% 50%)`,
                  }}
                />
                <div className="absolute inset-0 bg-primary-green transform rotate-[240deg]" />
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-2xl font-bold text-text-primary">
                  {languageSplit.en}%
                </p>
                <p className="text-xs text-text-muted">English</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-red rounded"></div>
              <span className="text-sm text-text-muted">EN ({languageSplit.en}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-green rounded"></div>
              <span className="text-sm text-text-muted">ES ({languageSplit.es}%)</span>
            </div>
          </div>
        </div>

        {/* Messages & Calls Timeline */}
        <div className="card lg:col-span-2">
          <h3 className="text-lg font-semibold text-text-primary mb-4">
            Messages & Calls (Last 7 Days)
          </h3>

          <div className="flex items-end justify-between gap-2 h-48">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
              const callHeight = Math.random() * 60 + 20;
              const smsHeight = Math.random() * 60 + 20;

              return (
                <div key={day} className="flex-1 flex flex-col items-center gap-2">
                  <div className="flex-1 w-full flex items-end justify-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${callHeight}%` }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex-1 bg-primary-green rounded-t"
                    />
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${smsHeight}%` }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.05 }}
                      className="flex-1 bg-blue-400 rounded-t"
                    />
                  </div>
                  <span className="text-xs text-text-muted">{day}</span>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary-green rounded"></div>
              <span className="text-sm text-text-muted">Calls</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span className="text-sm text-text-muted">SMS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Capacity & Performance */}
      <div className="card">
        <h3 className="text-lg font-semibold text-text-primary mb-4">
          Key Performance Metrics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-primary-red" />
              <p className="text-sm font-medium text-text-muted">
                Booking Fill Rate
              </p>
            </div>
            <p className="text-2xl font-bold text-text-primary mb-1">78%</p>
            <div className="h-2 bg-background rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1 }}
                className="h-full bg-primary-red rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary-green" />
              <p className="text-sm font-medium text-text-muted">No-Show Rate</p>
            </div>
            <p className="text-2xl font-bold text-text-primary mb-1">5%</p>
            <div className="h-2 bg-background rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "5%" }}
                transition={{ duration: 1 }}
                className="h-full bg-primary-green rounded-full"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              <p className="text-sm font-medium text-text-muted">
                Avg Response Time
              </p>
            </div>
            <p className="text-2xl font-bold text-text-primary mb-1">
              {overview.avgResponseTime}
            </p>
            <p className="text-xs text-text-muted">Target: &lt; 3s</p>
          </div>
        </div>
      </div>
    </div>
  );
}
