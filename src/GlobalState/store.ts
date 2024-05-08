import { configureStore } from '@reduxjs/toolkit';
import familyRequestBenReducer from './FamilyRequest/familyRequestBenSlice';
import familyRequestPetReducer from './FamilyRequest/familyRequestPetSlice';

export const store = configureStore({
    reducer: {
        familyRequestPet: familyRequestPetReducer,
        familyRequestBen: familyRequestBenReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;