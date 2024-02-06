import { useRef } from "react";


const useTabsReferences = () => {
    const services = useRef<HTMLDivElement>(null);
    const about = useRef<HTMLDivElement>(null);
    const contacts = useRef<HTMLDivElement>(null);

    return { services, about, contacts };
};

export default useTabsReferences;