import { FormEvent } from 'react';
import { postData } from 'services/api';
import { create } from 'zustand';

type FormState = {
  isLoading: boolean;
  isSuccess: boolean;
  name: string;
  description: string;
  numberStar: number;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setNumberStar: (numberStar: number) => void;
  sendForm: (e: FormEvent) => void;
};

export const useFormStore = create<FormState>((set) => ({
  isLoading: false,
  isSuccess: false,
  name: "",
  description: "",
  numberStar: 0,
  setName: (name) => set({ name }),
  setDescription: (description) => set({ description }),
  setNumberStar: (numberStar) => set({ numberStar }),
  sendForm: async (e) => {
    e.preventDefault()
    set({ isLoading: true });
    const { name, description, numberStar } = await useFormStore.getState();
    setTimeout(async () => {
      try {
        await postData({ name, description, stars: numberStar });
        set({ isSuccess: true });
      } catch (error) {
        console.error("Error sending form:", error);
      } finally {
        set({ isLoading: false });
      }
    }, 1000);
  },
}));

export default useFormStore
