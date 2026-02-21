import { cn } from "@/lib/utils";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface ProcessNotificationProps {
  step: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
  className?: string;
  showShadow?: boolean;
}

export function ProcessNotification({ step, description, status, className, showShadow = false }: ProcessNotificationProps) {
  return (
    <div className={cn(
      "relative w-full max-w-md rounded-lg border border-white/20 bg-black backdrop-blur-xl p-4 overflow-hidden",
      // Glossy gradient overlay
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent before:opacity-50",
      showShadow && "shadow-sm",
      className
    )}>
      {/* Glossy reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-60 pointer-events-none" />

      <div className="flex items-start gap-3 relative z-10">
        {/* Status Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {status === "completed" && (
            <CheckCircle2 className="w-5 h-5 text-white drop-shadow-lg" />
          )}
          {status === "in-progress" && (
            <Clock className="w-5 h-5 text-blue-400 animate-pulse drop-shadow-lg" />
          )}
          {status === "pending" && (
            <Circle className="w-5 h-5 text-gray-400 drop-shadow-lg" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className={cn(
            "text-sm font-medium drop-shadow-md",
            status === "completed" && "text-white",
            status === "in-progress" && "text-blue-300",
            status === "pending" && "text-gray-400"
          )}>
            {step}
          </p>
          <p className="text-xs text-gray-300 mt-0.5 drop-shadow-sm">
            {description}
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex-shrink-0">
          <span className={cn(
            "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium backdrop-blur-sm",
            status === "completed" && "bg-white/20 text-white border border-white/30",
            status === "in-progress" && "bg-blue-500/20 text-blue-300 border border-blue-400/30",
            status === "pending" && "bg-white/10 text-gray-400 border border-white/20"
          )}>
            {status === "completed" && "Done"}
            {status === "in-progress" && "Active"}
            {status === "pending" && "Pending"}
          </span>
        </div>
      </div>
    </div>
  );
}
