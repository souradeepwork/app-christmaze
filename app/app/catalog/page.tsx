"use client";

import { motion } from "framer-motion";
import { Plus, Grid3x3, List, DollarSign, Tag } from "lucide-react";
import { catalog } from "@/lib/seed-data";
import { formatCurrency } from "@/lib/utils";

export default function CatalogPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2">Catalog & Pricing</h1>
          <p className="text-text-muted">Manage items, bundles, and pricing rules</p>
        </div>

        <button className="btn-primary">
          <Plus className="w-4 h-4" />
          Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalog.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="card hover:border-primary-red/30 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-text-muted">{item.category}</p>
              </div>

              <DollarSign className="w-5 h-5 text-primary-gold" />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-text-primary">
                {formatCurrency(item.price)}
              </p>

              <div className="flex flex-wrap gap-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-background text-text-muted rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
              <span
                className={`text-sm font-medium ${
                  item.available ? "text-primary-green" : "text-primary-red"
                }`}
              >
                {item.available ? "Available" : "Out of Stock"}
              </span>

              <button className="text-sm text-primary-red hover:underline">
                Edit
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
