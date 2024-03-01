import React from "react";
import { Dispatch } from "react";
import { FamilyInfo, FamilyRequestInfo } from "../providers/RegFormProvider";


export interface FamilyRequestContextType {
    state: FamilyInfo;
    dispatch: Dispatch<FamilyRequestInfo>;
}

const RegFormContext = React.createContext<FamilyRequestContextType>({} as FamilyRequestContextType);

export default RegFormContext;

