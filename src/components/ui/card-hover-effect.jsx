"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8  "
      }
    >
      {items.map((item, idx) => (
        <div
          key={item?._id}
          className="relative group  p-1 "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full backdrop-blur-md bg-white/10  block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="h-56">
              <Image
                src={item.img}
                width={300}
                height={300}
                alt={item.title}
                className="rounded-3xl w-full h-full  object-cover"
              />
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              {item.description.length > 100
                ? item.description.slice(0, 100) + "..."
                : item.description}
            </CardDescription>
            {/* className="bottom-5 w-full absolute btn hover:text-white py-2
            text-sm" href={`/course/${_id}`} */}
            <Link
              href={`/course/${item._id}`}
              className="w-full btn hover:text-white py-2 text-sm mt-5"
            >
              View Details
            </Link>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-1 overflow-hidden hover:bg-slate-700 transition-all duration-300 backdrop-blur-xl bg-white/10 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
