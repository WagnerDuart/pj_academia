import { createContext, useState } from "react";

export const LinkContext = createContext ({})

export function LinkContextProvider ({children}) {
    const [linkActive, setlinkActive] = useState("Home");

    function changelinkactive (linkClicked = "Home") {
        setlinkActive(linkClicked)
    }

    return(
        <LinkContext.Provider value={{
            linkActive, changelinkactive
        }}>
            {children}
        </LinkContext.Provider>
    );
}