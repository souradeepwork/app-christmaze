"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Tag,
  Send,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { conversations } from "@/lib/seed-data";
import { formatTime, formatPhoneNumber } from "@/lib/utils";

export default function ConversationsPage() {
  const [selectedConvo, setSelectedConvo] = useState(conversations[0]);
  const [filter, setFilter] = useState("all");

  const filters = [
    { id: "all", label: "All", count: conversations.length },
    { id: "missed", label: "Missed", count: 0 },
    { id: "booking", label: "Booking", count: 1 },
    { id: "payment", label: "Payment", count: 0 },
    { id: "promo", label: "Promo", count: 1 },
    { id: "opt-out", label: "Opt-Out", count: 0 },
  ];

  return (
    <div className="h-[calc(100vh-7rem)] flex gap-6">
      {/* Left: Filters & Conversation List */}
      <div className="w-96 flex flex-col gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-lg focus:outline-none focus:border-primary-red/30 text-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                filter === f.id
                  ? "bg-primary-red text-white"
                  : "bg-surface text-text-muted hover:bg-surface/80"
              }`}
            >
              {f.label} {f.count > 0 && `(${f.count})`}
            </button>
          ))}
        </div>

        {/* Conversation List */}
        <div className="flex-1 overflow-y-auto space-y-2">
          {conversations.map((convo) => (
            <motion.div
              key={convo.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setSelectedConvo(convo)}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                selectedConvo?.id === convo.id
                  ? "bg-primary-red/10 border border-primary-red/30"
                  : "bg-surface hover:bg-surface/80 border border-transparent"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-text-primary">
                    {convo.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {formatPhoneNumber(convo.phone)}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-text-muted">
                    {formatTime(convo.timestamp)}
                  </span>
                  {convo.unread > 0 && (
                    <span className="px-2 py-0.5 bg-primary-red text-white text-xs font-medium rounded-full">
                      {convo.unread}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-text-muted mb-2 truncate">
                {convo.lastMessage}
              </p>

              <div className="flex flex-wrap gap-1">
                {convo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-background text-text-muted text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right: Thread View */}
      <div className="flex-1 flex flex-col bg-surface rounded-lg border border-border">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">
              {selectedConvo.name}
            </h3>
            <p className="text-sm text-text-muted">
              {formatPhoneNumber(selectedConvo.phone)}
            </p>
          </div>

          <div className="flex gap-2">
            <button className="p-2 hover:bg-background rounded-lg transition-all">
              <Phone className="w-4 h-4 text-text-muted" />
            </button>
            <button className="p-2 hover:bg-background rounded-lg transition-all">
              <Tag className="w-4 h-4 text-text-muted" />
            </button>
            <button className="btn-primary text-sm">
              <CheckCircle2 className="w-4 h-4" />
              Mark Resolved
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {/* AI Summary */}
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <MessageSquare className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-400 mb-1">
                  AI Summary
                </p>
                <p className="text-sm text-text-primary">
                  Customer inquired about booking for 4 people. Confirmed
                  reservation for 7:30 PM. Sent confirmation SMS.
                </p>
                <p className="text-xs text-text-muted mt-2">
                  💡 Suggested action: Send reminder 2 hours before booking
                </p>
              </div>
            </div>
          </div>

          {/* Sample Messages */}
          <div className="space-y-3">
            <div className="flex justify-end">
              <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-3 max-w-md">
                <p className="text-sm text-text-primary">
                  Do you have availability for 4 people this evening?
                </p>
                <span className="text-xs text-text-muted">7:05 PM</span>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-surface border border-border rounded-lg p-3 max-w-md">
                <p className="text-sm text-text-primary">
                  Yes! We have tables available at 6:00 PM, 7:30 PM, and 9:00
                  PM. Which works best for you?
                </p>
                <span className="text-xs text-text-muted">7:06 PM</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-primary-red/10 border border-primary-red/30 rounded-lg p-3 max-w-md">
                <p className="text-sm text-text-primary">7:30 PM would be perfect!</p>
                <span className="text-xs text-text-muted">7:07 PM</span>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-surface border border-border rounded-lg p-3 max-w-md">
                <p className="text-sm text-text-primary">
                  Perfect! See you at 7:30 PM
                </p>
                <span className="text-xs text-text-muted">7:08 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions & Composer */}
        <div className="p-4 border-t border-border space-y-3">
          {/* Canned Replies */}
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs bg-background hover:bg-surface border border-border rounded-lg transition-all">
              📅 Send Booking Link
            </button>
            <button className="px-3 py-1.5 text-xs bg-background hover:bg-surface border border-border rounded-lg transition-all">
              💳 Send Payment Link
            </button>
            <button className="px-3 py-1.5 text-xs bg-background hover:bg-surface border border-border rounded-lg transition-all">
              🎁 Offer 10% Code
            </button>
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary-red/30 text-sm"
            />
            <button className="btn-primary">
              <Send className="w-4 h-4" />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
