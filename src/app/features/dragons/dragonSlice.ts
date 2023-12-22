import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type Dragon = {
  id?: string;
  name: string;
};

const initialState: Dragon[] = [
  {
    id: uuidv4(),
    name: 'Krokmou',
  },
];

export const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    addDragon: (state, { payload }: PayloadAction<Omit<Dragon, 'id'>>) => {
      const newDragon = {
        id: uuidv4(),
        ...payload,
      };
      state.push(newDragon);
    },
    updateDragon: (state, { payload }) => {
      const index = state.findIndex((dragon) => dragon.id === payload.id);

      if (index !== -1) {
        state[index] = { ...state[index], ...payload };
      }
    },
    deleteDragon: (state, { payload }) => {
      return (state = state.filter((dragon) => dragon.id !== payload));
    },
  },
});

export const { addDragon, updateDragon, deleteDragon } = dragonSlice.actions;
