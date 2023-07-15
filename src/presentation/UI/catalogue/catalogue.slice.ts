import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CatalogueState, DefectType } from "./catalogue.types";

const initialState = { 
  defects: [],
  editingEntry: null
} as CatalogueState;

const catalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    loadCatalogue(state, action: PayloadAction<DefectType[]>) {
      state.defects = action.payload;
    },
    addEntryToCatalogue(state, action: PayloadAction<DefectType>) {
      state.defects.push(action.payload);
    },
    removeEntryFromCatalogue(state, action: PayloadAction<string>) {
      state.defects = state.defects.filter(
        (entry) => entry.id !== action.payload
      );
    },
  },
});

export const { loadCatalogue, addEntryToCatalogue, removeEntryFromCatalogue } = catalogueSlice.actions;
export default catalogueSlice.reducer;
