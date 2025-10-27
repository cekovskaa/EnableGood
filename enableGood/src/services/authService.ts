const API_BASE_URL = "http://localhost:5001";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  createdAt: string;
  // Additional onboarding fields
  organizationName?: string;
  country?: string;
  sector?: string;
  website?: string;
  mission?: string;
  partnershipGoals?: string[];
  selectedSDGs?: string[];
  partnerTypes?: string[];
  esgPillars?: string[];
  subscriptionPlan?: string;
  // Matchmaking field
  savedPartnerIds?: string[];
}

export interface UserWithoutPassword {
  id: string;
  email: string;
  name: string;
  role: string;
  createdAt: string;
  // Additional onboarding fields
  organizationName?: string;
  country?: string;
  sector?: string;
  website?: string;
  mission?: string;
  partnershipGoals?: string[];
  selectedSDGs?: string[];
  partnerTypes?: string[];
  esgPillars?: string[];
  subscriptionPlan?: string;
  // Matchmaking field
  savedPartnerIds?: string[];
  // Project filters
  filters?: {
    esg: string;
    sdg: string;
    industry: string;
    projectType: string;
    partner: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user?: UserWithoutPassword;
  message?: string;
}

export interface RegisterUserData {
  organizationName: string;
  country: string;
  sector: string;
  website?: string;
  email: string;
  password: string;
  mission?: string;
  partnershipGoals: string[];
  selectedSDGs: string[];
  partnerTypes: string[];
  esgPillars: string[];
  subscriptionPlan: string;
}

export interface RegisterResponse {
  success: boolean;
  user?: UserWithoutPassword;
  message?: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);

      if (!response.ok) {
        return { success: false, message: "Server error" };
      }

      const users: User[] = await response.json();
      const user = users.find((u) => u.email === credentials.email);

      if (!user) {
        return { success: false, message: "User not found" };
      }

      if (user.password !== credentials.password) {
        return { success: false, message: "Invalid password" };
      }

      const { password, ...userWithoutPassword } = user;
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      console.error("AuthService: Error:", error);
      return { success: false, message: "Server error" };
    }
  },

  async getUserById(id: string): Promise<User | null> {
    try {
      const response = await fetch(`${API_BASE_URL}/users/${id}`);
      if (!response.ok) return null;

      const user = await response.json();
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      return null;
    }
  },

  async register(userData: RegisterUserData): Promise<RegisterResponse> {
    try {
      // Check if user already exists
      const existingUsersResponse = await fetch(`${API_BASE_URL}/users`);
      if (!existingUsersResponse.ok) {
        return { success: false, message: "Server error" };
      }

      const existingUsers: User[] = await existingUsersResponse.json();
      const existingUser = existingUsers.find(
        (u) => u.email === userData.email
      );

      if (existingUser) {
        return { success: false, message: "User already exists" };
      }

      // Create new user
      const newUser: User = {
        id: (existingUsers.length + 1).toString(),
        email: userData.email,
        password: userData.password,
        name: userData.organizationName,
        role: "user",
        createdAt: new Date().toISOString(),
        // Store additional onboarding data
        organizationName: userData.organizationName,
        country: userData.country,
        sector: userData.sector,
        website: userData.website,
        mission: userData.mission,
        partnershipGoals: userData.partnershipGoals,
        selectedSDGs: userData.selectedSDGs,
        partnerTypes: userData.partnerTypes,
        esgPillars: userData.esgPillars,
        subscriptionPlan: userData.subscriptionPlan,
        // Initialize empty saved partners array
        savedPartnerIds: [],
      };

      const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        return { success: false, message: "Failed to create user" };
      }

      const { password, ...userWithoutPassword } = newUser;
      return { success: true, user: userWithoutPassword };
    } catch (error) {
      console.error("AuthService: Registration error:", error);
      return { success: false, message: "Server error" };
    }
  },

  async updateUser(
    userId: string,
    updatedData: Partial<UserWithoutPassword>
  ): Promise<{ success: boolean; message?: string }> {
    try {
      // Update user in database using PATCH method (JSON Server supports this)
      const updateResponse = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData), // Only send the updated fields
      });

      if (!updateResponse.ok) {
        return { success: false, message: "Failed to update user" };
      }

      return { success: true };
    } catch (error) {
      console.error("AuthService: Update user error:", error);
      return { success: false, message: "Server error" };
    }
  },
};
