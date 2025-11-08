"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Plus,
  List,
  Settings,
  Filter,
  Users,
  Clock,
  Check,
  X,
} from "lucide-react";
import { bookings } from "@/lib/seed-data";
import { formatPhoneNumber } from "@/lib/utils";

export default function BookingsPage() {
  const [view, setView] = useState<"calendar" | "list">("calendar");
  const [selectedDate, setSelectedDate] = useState("2025-12-15");

  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Bookings</h1>
          <p className="text-text-muted">Manage events, slots, and reservations</p>
        </div>

        <div className="flex gap-2">
          <div className="flex bg-surface border border-border rounded-lg p-1">
            <button
              onClick={() => setView("calendar")}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                view === "calendar"
                  ? "bg-primary-red text-white"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <CalendarIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                view === "list"
                  ? "bg-primary-red text-white"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          <button className="btn-secondary">
            <Settings className="w-4 h-4" />
            Slot Settings
          </button>

          <button className="btn-primary">
            <Plus className="w-4 h-4" />
            New Booking
          </button>
        </div>
      </div>

      {view === "calendar" ? (
        <div className="grid grid-cols-12 gap-6">
          {/* Mini Calendar */}
          <div className="col-span-3 card">
            <h3 className="text-sm font-semibold text-text-primary mb-4">
              December 2025
            </h3>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div
                  key={day}
                  className="text-xs text-text-muted text-center font-medium"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const date = `2025-12-${day.toString().padStart(2, "0")}`;
                const hasBookings = bookings.some((b) => b.date === date);

                return (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(date)}
                    className={`aspect-square flex items-center justify-center text-xs rounded transition-all ${
                      selectedDate === date
                        ? "bg-primary-red text-white"
                        : hasBookings
                        ? "bg-primary-green/10 text-primary-green hover:bg-primary-green/20"
                        : "text-text-muted hover:bg-surface"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-green rounded"></div>
                <span className="text-xs text-text-muted">Has bookings</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary-red rounded"></div>
                <span className="text-xs text-text-muted">Selected</span>
              </div>
            </div>
          </div>

          {/* Day View */}
          <div className="col-span-9 card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {new Date(selectedDate).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                <p className="text-sm text-text-muted">
                  {bookings.filter((b) => b.date === selectedDate).length} bookings
                  • 12 available slots
                </p>
              </div>

              <button className="btn-secondary text-sm">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {timeSlots.map((time) => {
                const booking = bookings.find(
                  (b) => b.date === selectedDate && b.time === time
                );

                return (
                  <motion.div
                    key={time}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`flex items-center gap-4 p-3 rounded-lg border transition-all ${
                      booking
                        ? booking.status === "confirmed"
                          ? "bg-primary-green/5 border-primary-green/30 hover:bg-primary-green/10"
                          : "bg-primary-gold/5 border-primary-gold/30 hover:bg-primary-gold/10"
                        : "bg-surface border-border hover:bg-surface/80"
                    } cursor-pointer`}
                  >
                    <div className="w-20 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-text-muted" />
                      <span className="text-sm font-medium">{time}</span>
                    </div>

                    {booking ? (
                      <>
                        <div className="flex-1 flex items-center gap-4">
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-text-primary">
                              {booking.customerName}
                            </p>
                            <p className="text-xs text-text-muted">
                              {formatPhoneNumber(booking.phone)} • {booking.partySize}{" "}
                              guests
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

                            <span className="px-2 py-1 text-xs bg-background text-text-muted rounded">
                              {booking.source}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-1">
                          {booking.status === "hold" && (
                            <>
                              <button className="p-1.5 hover:bg-primary-green/10 rounded transition-all">
                                <Check className="w-4 h-4 text-primary-green" />
                              </button>
                              <button className="p-1.5 hover:bg-primary-red/10 rounded transition-all">
                                <X className="w-4 h-4 text-primary-red" />
                              </button>
                            </>
                          )}
                        </div>
                      </>
                    ) : (
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-sm text-text-muted">Available</span>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-text-muted" />
                          <span className="text-xs text-text-muted">4 capacity</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* List View */
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">
                    Date & Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">
                    Party Size
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">
                    Source
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-text-muted uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-surface/50 transition-all"
                  >
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-text-primary">
                          {booking.customerName}
                        </p>
                        <p className="text-xs text-text-muted">
                          {formatPhoneNumber(booking.phone)}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-text-primary">
                      {new Date(booking.date).toLocaleDateString()} at{" "}
                      {booking.time}
                    </td>
                    <td className="px-4 py-3 text-sm text-text-primary">
                      {booking.partySize} guests
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded ${
                          booking.status === "confirmed"
                            ? "bg-primary-green/10 text-primary-green"
                            : "bg-primary-gold/10 text-primary-gold"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs bg-background text-text-muted rounded">
                        {booking.source}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-sm text-primary-red hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
