import { create } from 'zustand';

interface UIState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  toast: { message: string; type: 'success' | 'error' | 'info' | null };
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  hideToast: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isSidebarOpen: false,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  isCartOpen: false,
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  toast: { message: '', type: null },
  showToast: (message, type = 'info') => {
    set({ toast: { message, type } });
    setTimeout(() => {
      set({ toast: { message: '', type: null } });
    }, 3000);
  },
  hideToast: () => set({ toast: { message: '', type: null } }),
}));
