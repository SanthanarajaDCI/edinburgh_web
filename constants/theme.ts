// Edinburgh Cashmere - Design System Constants

export const colors = {
  primary: "#0D1B2A",       // Deep Navy
  accent: "#D4AF37",        // Soft Gold
  background: "#F8F9FA",    // Off-White
  surface: "#FFFFFF",       // White
  textPrimary: "#1B263B",   // Dark text
  textSecondary: "#778DA9", // Muted text
  error: "#EF4444",
  success: "#22C55E",
  warning: "#F59E0B",
} as const;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
} as const;

export const borderRadius = {
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  "2xl": "24px",
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px rgba(0, 0, 0, 0.05)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.05)",
} as const;
