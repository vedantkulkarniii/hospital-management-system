import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null, // Will store {_id, name, email, role}
  isAuthenticated: false,
  login: (userData) => set({ user: userData, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;
