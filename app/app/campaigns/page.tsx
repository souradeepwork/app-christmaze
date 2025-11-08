"use client";

import { motion } from "framer-motion";
import { Plus, Send, Clock, CheckCircle2, FileText } from "lucide-react";
import { campaigns } from "@/lib/seed-data";

export default function CampaignsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Campaigns</h1>
          <p className="text-text-muted">SMS/voice promotions and broadcasts</p>
        </div>

        <button className="btn-primary">
          <Plus className="w-4 h-4" />
          Create Campaign
        </button>
      </div>

      <div className="space-y-4">
        {campaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:border-primary-red/30 cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`p-3 rounded-lg ${
                    campaign.status === "sent"
                      ? "bg-primary-green/10"
                      : campaign.status === "scheduled"
                      ? "bg-blue-500/10"
                      : "bg-text-muted/10"
                  }`}
                >
                  {campaign.status === "sent" ? (
                    <CheckCircle2 className="w-6 h-6 text-primary-green" />
                  ) : campaign.status === "scheduled" ? (
                    <Clock className="w-6 h-6 text-blue-400" />
                  ) : (
                    <FileText className="w-6 h-6 text-text-muted" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {campaign.name}
                  </h3>

                  <p className="text-sm text-text-muted mb-3">
                    {campaign.status === "sent"
                      ? `Sent ${campaign.scheduledDate} • ${campaign.delivered}/${campaign.recipients} delivered`
                      : campaign.status === "scheduled"
                      ? `Scheduled for ${campaign.scheduledDate} • ${campaign.recipients} recipients`
                      : "Not scheduled"}
                  </p>

                  {campaign.status === "sent" && (
                    <div className="flex gap-6">
                      <div>
                        <p className="text-xs text-text-muted">Clicks</p>
                        <p className="text-lg font-semibold text-text-primary">
                          {campaign.clicks}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">CTR</p>
                        <p className="text-lg font-semibold text-primary-green">
                          {((campaign.clicks / campaign.delivered) * 100).toFixed(1)}%
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">Opt-outs</p>
                        <p className="text-lg font-semibold text-text-primary">
                          {campaign.optOuts}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
