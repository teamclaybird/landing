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
      "w-full max-w-md rounded-lg border bg-white dark:bg-gray-800 p-4",
      showShadow && "shadow-sm",
      className
    )}>
      <div className="flex items-start gap-3">
        {/* Status Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {status === "completed" && (
            <CheckCircle2 className="w-5 h-5 text-gray-900 dark:text-gray-100" />
          )}
          {status === "in-progress" && (
            <Clock className="w-5 h-5 text-blue-700 animate-pulse" />
          )}
          {status === "pending" && (
            <Circle className="w-5 h-5 text-gray-300 dark:text-gray-600" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p className={cn(
            "text-sm font-medium",
            status === "completed" && "text-gray-900 dark:text-gray-100",
            status === "in-progress" && "text-blue-800 dark:text-blue-400",
            status === "pending" && "text-gray-500 dark:text-gray-400"
          )}>
            {step}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            {description}
          </p>
        </div>

        {/* Status Badge */}
        <div className="flex-shrink-0">
          <span className={cn(
            "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium",
            status === "completed" && "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900",
            status === "in-progress" && "bg-blue-700 text-white dark:bg-blue-900/30 dark:text-blue-400",
            status === "pending" && "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
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
