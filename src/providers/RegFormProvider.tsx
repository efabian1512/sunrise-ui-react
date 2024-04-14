import { ReactNode, useReducer } from "react";
import RegFormContext from '../Contexts/RegFormContext';

export interface  FamilyInfo { 
    common: {[key: string]: string},
    addressHistory: {[key: string]: string | Date}[],
    marriageInfo: {[key: string]: string},
    parentsInfo: {[key: string]: string | Date}[],
    employmentHistory: {[key: string]: string | Date}[],
    percent: number
}

interface FamilyRequestStoreDataAction {
    type: 'SET_COMMON_DATA' 
    | 'SET_ADDRESS_HISTORY' 
    | 'SET_MARRIAGE_INFO' 
    | 'SET_PARENTS_INFO'
    | 'SET_EMPLOYMENT_HISTORY'
    data: {[key: string]: string};
}

interface PercentInfo {
    type: 'CHANGE_PERCENT',
    data: number
}

export type FamilyRequestInfo = FamilyRequestStoreDataAction | PercentInfo;

//export const RegFormContext = React.createContext({});

const familyRequestReducer = (state: FamilyInfo , action: FamilyRequestInfo): FamilyInfo => {

    switch (action.type) {
        case 'SET_COMMON_DATA': return {...state, common: {...action.data}}
    
        case 'SET_ADDRESS_HISTORY': return {...state, addressHistory: [...state.addressHistory as {[key:string]: string}[], action.data]}
        
        case 'SET_MARRIAGE_INFO': return {...state, marriageInfo: {...action.data}}
    
        case 'SET_PARENTS_INFO': return {...state, parentsInfo: [...state.parentsInfo!, action.data]}

        case 'SET_EMPLOYMENT_HISTORY': return {...state, employmentHistory: [...state.employmentHistory!, action.data]}
    
        case 'CHANGE_PERCENT': return { ...state, percent: action.data}

        default: return state;
    }
}

interface Props {
    children: ReactNode;
}
const RegFormProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(familyRequestReducer, {
        common: {}, 
        addressHistory: [],
        marriageInfo: {},
        parentsInfo: [],
        employmentHistory: [],
        percent: 0
    });
    
    return <RegFormContext.Provider value={{state, dispatch}}>
            {children}
    </RegFormContext.Provider>
}
export default RegFormProvider;
