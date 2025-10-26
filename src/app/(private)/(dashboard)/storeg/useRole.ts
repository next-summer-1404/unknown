
import { create } from 'zustand'

type Role = 'buyer' | 'seller'

interface RoleStore {
  role: Role
  setRole: (r: Role) => void
  toggle: () => void
}

export const useRole = create<RoleStore>((set) => ({
  role: 'seller',
  
  setRole: (r) => set({ role: r }),  
  toggle: () => set((state) => ({ 
    role: state.role === 'buyer' ? 'seller' : 'buyer' 
  }))
}))
