import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_SESSION_KEY = "AUTH_SESSION";
const REGISTERED_USER_KEY = "REGISTERED_USER";

type User = {
  email: string;
  name: string;
};

type AuthState = {
  user: User | null;
  token: string | null;

  isAuthenticated: boolean;
  isGuest: boolean;
  isLoading: boolean;

  signup: (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }) => Promise<void>;

  login: (email: string, password: string) => Promise<void>;
  restoreSession: () => Promise<void>;
  logout: () => Promise<void>;
  enterGuestMode: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  // ------------------
  // STATE
  // ------------------
  user: null,
  token: null,
  isAuthenticated: false,
  isGuest: false,
  isLoading: true,

  // ------------------
  // SIGNUP
  // ------------------
  signup: async ({ firstName, lastName, email, password }) => {
    if (!email || !password) {
      throw new Error("All fields required");
    }

    // Allow overwrite — AsyncStorage persists on native, so a previous signup
    // would block new signups. For demo/mock auth we let signup proceed.
    const newUser = {
      email,
      password, // ⚠️ learning only
      name: `${firstName} ${lastName}`,
    };

    await AsyncStorage.setItem(REGISTERED_USER_KEY, JSON.stringify(newUser));

    const token = "mock-token";

    await AsyncStorage.setItem(
      AUTH_SESSION_KEY,
      JSON.stringify({
        user: { email, name: newUser.name },
        token,
      }),
    );

    set({
      user: { email, name: newUser.name },
      token,
      isAuthenticated: true,
      isGuest: false,
    });
  },

  // ------------------
  // LOGIN
  // ------------------
  login: async (email, password) => {
    const stored = await AsyncStorage.getItem(REGISTERED_USER_KEY);

    if (!stored) {
      throw new Error("No account found. Please signup.");
    }

    const savedUser = JSON.parse(stored);

    if (savedUser.email !== email || savedUser.password !== password) {
      throw new Error("Invalid email or password");
    }

    const token = "mock-token";

    await AsyncStorage.setItem(
      AUTH_SESSION_KEY,
      JSON.stringify({
        user: { email, name: savedUser.name },
        token,
      }),
    );

    set({
      user: { email, name: savedUser.name },
      token,
      isAuthenticated: true,
      isGuest: false,
    });
  },

  // ------------------
  // RESTORE SESSION
  // ------------------
  restoreSession: async () => {
    const session = await AsyncStorage.getItem(AUTH_SESSION_KEY);

    if (session) {
      const parsed = JSON.parse(session);
      set({
        user: parsed.user,
        token: parsed.token,
        isAuthenticated: true,
        isGuest: false,
        isLoading: false,
      });
    } else {
      set({
        isLoading: false,
      });
    }
  },

  // ------------------
  // LOGOUT
  // ------------------
  logout: async () => {
    await AsyncStorage.removeItem(AUTH_SESSION_KEY);

    set({
      user: null,
      token: null,
      isAuthenticated: false,
      isGuest: false,
    });
  },

  // ------------------
  // ENTER GUEST MODE
  // ------------------
  enterGuestMode: () => {
    set({
      user: null, // ✅ no real user
      token: null,
      isAuthenticated: false,
      isGuest: true, // ✅ guest identity
    });
  },
}));
