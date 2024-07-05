/**
 * 全局store
 */
import { FC, ReactElement, createContext, useState } from 'react';

type GlobalStoreType = {
    title: string;
    refreshTitle: (str: string) => void;
};

export const GlobalContext = createContext({} as GlobalStoreType);

export const GlobalStore: FC<{ children: ReactElement }> = ({ children }) => {
    const [title, refreshTitle] = useState('');

    return <GlobalContext.Provider value={{ title, refreshTitle }}>{children}</GlobalContext.Provider>;
};
