import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface  FamilyInfo { 
    petCommonInfo: {[key: string]: string},
    petAddressHistory: {[key: string]: string | Date}[],
    petMarriageInfo: {[key: string]: string},
    petParentsInfo: {[key: string]: string | Date}[],
    petEmploymentHistory: {[key: string]: string | Date}[],
    famReqPercent: number
}

const initialState: FamilyInfo = {
    petCommonInfo: {},
    petAddressHistory: [],
    petMarriageInfo: {},
    petParentsInfo: [],
    petEmploymentHistory: [],
    famReqPercent: 0
};


export type FamilyRequestStoreDataAction = {[key: string]: string} |  {[key: string]: string | Date}[];;

const familyRequestPetSlice = createSlice({
    name: "familyRequest",
    initialState,
    reducers: {
        setPetCommonData: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.petCommonInfo = action.payload as {[key: string]: string};
        },
        setPetAddressHistory: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.petAddressHistory = [...state.petAddressHistory, action.payload as {[key: string]: string | Date}];
        },
        setPetMarriageInfo: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.petMarriageInfo = action.payload as {[key: string]: string};
        },
        setPetParentsInfo: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.petParentsInfo = [...state.petParentsInfo, action.payload as {[key: string]: string | Date}];
        },
        setPetEmploymentHistory: (state, action: PayloadAction<FamilyRequestStoreDataAction>) => {
            state.petEmploymentHistory = [...state.petEmploymentHistory, action.payload as {[key: string]: string | Date}];
        },
        changeFamReqPercent: (state, action: PayloadAction<number>) => {
            state.famReqPercent += action.payload;
        }
    },
});


export const { setPetCommonData, setPetAddressHistory, setPetMarriageInfo, setPetParentsInfo, setPetEmploymentHistory, changeFamReqPercent } = familyRequestPetSlice.actions;

export default familyRequestPetSlice.reducer;