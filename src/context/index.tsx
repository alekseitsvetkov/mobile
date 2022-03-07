import React, {FC, ReactNode, createContext, useCallback, useState} from 'react';

import {IAppContextType, IMe} from './types';

export const AppContext = createContext({} as IAppContextType);

interface IProps {
    children: ReactNode;
}

export const AppContextProvider: FC<IProps> = ({children}) => {
    // TODO: MAYBE NEED SAVE IN ASYNC STORAGE INSTEAD CONTEXT?
    const [me, setMe] = useState({
        id: '',
    });

    const updateMe = useCallback((me: IMe) => {
        setMe(me);
    }, []);

    const value = {
        me,
        updateMe,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
