import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface  FamilyInfo { 
    benCommonInfo: {[key: string]: string},
    benAddressHistory: {[key: string]: string | Date}[],
    benMarriageInfo: {[key: string]: string},
    benParentsInfo: {[key: string]: string | Date}[],
    benEmploymentHistory: {[key: string]: string | Date}[],
}

const initialState: FamilyInfo = {
    benCommonInfo: {},
    benAddressHistory: [],
    benMarriageInfo: {},
    benParentsInfo: [],
    benEmploymentHistory: [],
};


export type FamilyRequestStoreDataAction = {[key: string]: string} |  {[key: string]: string | Date}[];;

const familyRequestBenSlice = createSlice({
    name: "familyRequest",
    initialState,
    reducers: {
        setBenCommonData: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.benCommonInfo = action.payload as {[key: string]: string};
        },
        setBenAddressHistory: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.benAddressHistory = [...state.benAddressHistory, action.payload as {[key: string]: string | Date}];
        },
        setBenMarriageInfo: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.benMarriageInfo = action.payload as {[key: string]: string};
        },
        setBenParentsInfo: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.benParentsInfo = [...state.benParentsInfo, action.payload as {[key: string]: string | Date}];
        },
        setBenEmploymentHistory: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.benEmploymentHistory = [...state.benEmploymentHistory, action.payload as {[key: string]: string | Date}];
        },
    },
});


export const { setBenCommonData, setBenAddressHistory, setBenMarriageInfo, setBenParentsInfo, setBenEmploymentHistory } = familyRequestBenSlice.actions;

export default familyRequestBenSlice.reducer;