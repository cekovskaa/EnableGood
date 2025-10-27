import { create } from "zustand";
import { matchmakingService } from "../services/matchmakingService";

interface MatchmakingState {
  savedPartnerIds: string[];
  isLoading: boolean;

  // Actions
  loadSavedPartners: (userId: string) => Promise<void>;
  savePartner: (userId: string, partnerId: string) => Promise<boolean>;
  unsavePartner: (userId: string, partnerId: string) => Promise<boolean>;
  isPartnerSaved: (partnerId: string) => boolean;
  clearSavedPartners: () => void;
}

export const useMatchmakingStore = create<MatchmakingState>((set, get) => ({
  savedPartnerIds: [],
  isLoading: false,

  loadSavedPartners: async (userId: string) => {
    set({ isLoading: true });
    try {
      const partnerIds = await matchmakingService.getSavedPartnerIds(userId);
      set({ savedPartnerIds: partnerIds, isLoading: false });
    } catch (error) {
      console.error("Failed to load saved partners:", error);
      set({ isLoading: false });
    }
  },

  savePartner: async (userId: string, partnerId: string) => {
    const response = await matchmakingService.savePartner(userId, partnerId);

    if (response.success) {
      set((state) => ({
        savedPartnerIds: [...state.savedPartnerIds, partnerId],
      }));
      return true;
    }

    return false;
  },

  unsavePartner: async (userId: string, partnerId: string) => {
    const response = await matchmakingService.unsavePartner(userId, partnerId);

    if (response.success) {
      set((state) => ({
        savedPartnerIds: state.savedPartnerIds.filter((id) => id !== partnerId),
      }));
      return true;
    }

    return false;
  },

  isPartnerSaved: (partnerId: string) => {
    return get().savedPartnerIds.includes(partnerId);
  },

  clearSavedPartners: () => {
    set({ savedPartnerIds: [] });
  },
}));
