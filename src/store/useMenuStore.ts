import { create } from "zustand";

// state
type MenuState = {
    isMenuOpen: boolean;
};

// actions
type MenuAction = {
    toggleMenu: () => void;
    setIsMenuOpen: (value: boolean) => void;
};

// initial state
const initialState: MenuState = {
    isMenuOpen: false
};

// use
export const useMenuStore = create<MenuState & MenuAction>()((set) => ({
    // initial state
    ...initialState,

    // actions
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),

    // set state
    setIsMenuOpen: (value: boolean) => set({ isMenuOpen: value })
}));
