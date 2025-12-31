"use client";

import { Collection } from "@/lib/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CollectionCardProps {
  collection: Collection;
  onClick?: () => void;
  className?: string;
}

export function CollectionCard({
  collection,
  onClick,
  className,
}: CollectionCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "group block relative cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className={cn(
        "aspect-[3/4] mb-5 bg-gray-50 relative overflow-hidden transition-all duration-500",
        collection.id === "origin" ? "shadow-md group-hover:shadow-xl" : "shadow-sm group-hover:shadow-md"
      )}>
        {collection.badge && (
          <span className="absolute top-0 left-0 bg-[#B91C1C] text-white text-[10px] font-bold px-3 py-1.5 z-10 uppercase tracking-wider">
            {collection.badge}
          </span>
        )}
        {collection.imageUrl ? (
          <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${collection.imageUrl})` }} />
        ) : (
          <div className="w-full h-full img-box text-[10px] text-gray-300 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
            [Image] {collection.name}
          </div>
        )}
      </div>
      <h3 className="text-xl font-medium text-gray-900 group-hover:text-[#B91C1C] transition-colors font-serif">
        {collection.name}
      </h3>
      <p className="text-xs text-gray-500 mt-2">
        {collection.description}
      </p>
    </motion.div>
  );
}

