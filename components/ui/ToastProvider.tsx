"use client";

import { useUIStore } from "@/store/useUIStore";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function ToastProvider() {
  const { toast, hideToast } = useUIStore();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (toast.type) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2700); // Start exit animation slightly before 3s
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [toast]);

  if (!toast.type && !isVisible) return null;

  return (
    <div 
      className={cn(
        "fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <div className="bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 min-w-[280px]">
        {toast.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0" />}
        {toast.type === "error" && <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />}
        {toast.type === "info" && <Info className="w-5 h-5 text-blue-400 shrink-0" />}
        
        <p className="text-sm font-medium flex-1">{toast.message}</p>
        
        <button onClick={hideToast} className="text-gray-400 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
