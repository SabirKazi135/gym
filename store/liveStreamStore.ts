import { create } from "zustand";

type Participant = {
  uid: number;
  videoEnabled: boolean;
};

type LiveStreamState = {
  channelName: string | null;
  participants: Participant[];

  joined: boolean;

  setChannel: (channel: string) => void;
  addParticipant: (uid: number) => void;
  removeParticipant: (uid: number) => void;
  setJoined: (value: boolean) => void;
};

export const useLiveStreamStore = create<LiveStreamState>((set) => ({
  channelName: null,
  participants: [],
  joined: false,

  setChannel: (channel) =>
    set({ channelName: channel }),

  addParticipant: (uid) =>
    set((state) => ({
      participants: [...state.participants, { uid, videoEnabled: true }],
    })),

  removeParticipant: (uid) =>
    set((state) => ({
      participants: state.participants.filter((p) => p.uid !== uid),
    })),

  setJoined: (value) =>
    set({ joined: value }),
}));