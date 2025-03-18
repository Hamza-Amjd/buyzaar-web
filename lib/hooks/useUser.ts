import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  userData: any; // Define the type as needed
  setUserData: (data: any) => void;
  clearUserData: () => void;
}

const useUser = create(persist<UserStore>((set) => ({
  userData: null, // Initialize userData
  setUserData: (data) => set({ userData: data }), // Set user data
  clearUserData: () => set({ userData: null }), // Clear user data
}),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
));

export default useUser;