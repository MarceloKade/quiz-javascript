import { createContext, useContext, useState } from "react";

interface ToggleColorContextProps {
    isClicked: boolean;
    handleClick: () => void;
    theme: {
        backgroundColor: string;
    };
}

const ToggleColorContext = createContext<ToggleColorContextProps>({
    isClicked: false,
    handleClick: () => { },
    theme: {
        backgroundColor: "black",
    },
});

interface ToggleColorProviderProps {
    children: React.ReactNode;
}

export function ToggleColorProvider({ children }: ToggleColorProviderProps) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const theme = {
        backgroundColor: isClicked ? "white" : "black",
    };

    const contextValue = {
        isClicked,
        handleClick,
        theme,
    };

    return (
        <ToggleColorContext.Provider value={contextValue}>
            {children}
        </ToggleColorContext.Provider>
    );
}

export function useToggleColor() {
    return useContext(ToggleColorContext);
}