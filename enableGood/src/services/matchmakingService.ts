const API_BASE_URL = "http://localhost:5001";

export interface SavePartnerResponse {
  success: boolean;
  message?: string;
}

export const matchmakingService = {
  async savePartner(
    userId: string,
    partnerId: string
  ): Promise<SavePartnerResponse> {
    try {
      // Get current user data
      const userResponse = await fetch(`${API_BASE_URL}/users/${userId}`);
      if (!userResponse.ok) {
        return { success: false, message: "Failed to fetch user data" };
      }

      const userData = await userResponse.json();
      const currentSavedIds = userData.savedPartnerIds || [];

      // Check if partner is already saved
      if (currentSavedIds.includes(partnerId)) {
        return { success: false, message: "Partner already saved" };
      }

      // Add new partner ID
      const updatedSavedIds = [...currentSavedIds, partnerId];

      // Update user with new saved partners
      const updateResponse = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          savedPartnerIds: updatedSavedIds,
        }),
      });

      if (!updateResponse.ok) {
        return { success: false, message: "Failed to save partner" };
      }

      return { success: true };
    } catch (error) {
      console.error("MatchmakingService: Save partner error:", error);
      return { success: false, message: "Server error" };
    }
  },

  async unsavePartner(
    userId: string,
    partnerId: string
  ): Promise<SavePartnerResponse> {
    try {
      // Get current user data
      const userResponse = await fetch(`${API_BASE_URL}/users/${userId}`);
      if (!userResponse.ok) {
        return { success: false, message: "Failed to fetch user data" };
      }

      const userData = await userResponse.json();
      const currentSavedIds = userData.savedPartnerIds || [];

      // Remove partner ID
      const updatedSavedIds = currentSavedIds.filter(
        (id: string) => id !== partnerId
      );

      // Update user with new saved partners
      const updateResponse = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          savedPartnerIds: updatedSavedIds,
        }),
      });

      if (!updateResponse.ok) {
        return { success: false, message: "Failed to unsave partner" };
      }

      return { success: true };
    } catch (error) {
      console.error("MatchmakingService: Unsave partner error:", error);
      return { success: false, message: "Server error" };
    }
  },

  async getSavedPartnerIds(userId: string): Promise<string[]> {
    try {
      const userResponse = await fetch(`${API_BASE_URL}/users/${userId}`);
      if (!userResponse.ok) {
        return [];
      }

      const userData = await userResponse.json();
      return userData.savedPartnerIds || [];
    } catch (error) {
      console.error("MatchmakingService: Get saved partners error:", error);
      return [];
    }
  },
};
