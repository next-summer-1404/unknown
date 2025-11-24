import { create } from "zustand";

// export interface Traveler {
// firstName: string;
// lastName: string;
// gender: string;
// birthDate: string;
// nationalId: string;
// }

// interface BookingState {
// houseId: string | number | null;
// reservedDates: string[]; // [startISO, endISO]
// travelers: Traveler[];
// sharedEmail: string;
// sharedMobile: string;

// // setters
// setHouseId: (id: string | number) => void;
// setReservedDates: (startISO: string, endISO: string) => void;
// setTravelers: (list: Traveler[]) => void; // این اضافه شد
// addTraveler: (traveler: Traveler) => void;
// updateTraveler: (index: number, traveler: Traveler) => void;
// removeTraveler: (index: number) => void;
// setSharedContact: (email: string, mobile: string) => void;
// resetBooking: () => void;
// }

// export const useBookingStore = create<BookingState>((set) => ({
// houseId: null,
// reservedDates: [],
// travelers: [],
// sharedEmail: "",
// sharedMobile: "",

// setHouseId: (id) => set({ houseId: id }),

// setReservedDates: (startISO, endISO) => {
// set({ reservedDates: [startISO, endISO] });
// },

// setTravelers: (list) => set({ travelers: list }), // این اضافه شد

// addTraveler: (traveler) =>
// set((state) => ({ travelers: [...state.travelers, traveler] })),

// updateTraveler: (index, traveler) =>
// set((state) => {
// const updated = [...state.travelers];
// updated[index] = traveler;
// return { travelers: updated };
// }),

// removeTraveler: (index) =>
// set((state) => ({
// travelers: state.travelers.filter((_, i) => i !== index),
// })),

// setSharedContact: (email, mobile) =>
// set({ sharedEmail: email, sharedMobile: mobile }),

// resetBooking: () =>
// set({
// houseId: null,
// reservedDates: [],
// travelers: [],
// sharedEmail: "",
// sharedMobile: "",
// }),
// }));



export interface Traveler {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  nationalId: string;
}

interface BookingState {
  houseId: string | number | null;
  reservedDates: string[];
  travelers: Traveler[];
  sharedEmail: string;
  sharedMobile: string;

  setHouseId: (id: string | number) => void;
  setReservedDates: (startISO: string, endISO: string) => void;
  setTravelers: (list: Traveler[]) => void;
  setSharedContact: (email: string, mobile: string) => void;
  resetBooking: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  houseId: null,
  reservedDates: [],
  travelers: [],
  sharedEmail: "",
  sharedMobile: "",

  setHouseId: (id) => set({ houseId: id }),
  setReservedDates: (startISO, endISO) => set({ reservedDates: [startISO, endISO] }),
  setTravelers: (list) => set({ travelers: list }),
  setSharedContact: (email, mobile) => set({ sharedEmail: email, sharedMobile: mobile }),
  resetBooking: () => set({ houseId: null, reservedDates: [], travelers: [], sharedEmail: "", sharedMobile: "" }),
}));
