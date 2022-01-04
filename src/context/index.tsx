import React, { useState, createContext, useCallback, useEffect } from 'react';
import { Appearance, ColorSchemeName, useColorScheme } from 'react-native';

import { IconSizes } from '_app/constants';
import { LoadingIndicator } from '_app/layout';
import { Theme, ThemeStatic } from '_app/theme';
import { ThemeColors } from '_app/types/theme';
import { loadThemeType } from '_app/utils/storage';

type MeType = {
  id: string;
};

type AppContextType = {
  me: MeType;
  updateMe: (me: MeType) => void;
  theme: ThemeColors;
  themeType: string;
  toggleTheme: (type: string) => void;
  selectedList: string;
  selectList: (list: string) => void;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = props => {
  const scheme = useColorScheme();

  const [initializing, setInitializing] = useState(true);
  const [type, setType] = useState<string>();
  const [schemeTheme, setSchemeTheme] = useState<ColorSchemeName>();

  // TODO: maybe need save in async storage instead context?
  const [me, setMe] = useState({
    id: '',
  });
  const [selectedList, setSelectedList] = useState('want');
  const [theme, setTheme] = useState(Theme.light.colors);
  const [themeType, setThemeType] = useState(Theme.light.type);

  const themeChangeListener = useCallback(() => {
    setSchemeTheme(Appearance.getColorScheme());
  }, []);

  useEffect(() => {
    const listener = Appearance.addChangeListener(themeChangeListener);
    return () => listener.remove();
  }, [themeChangeListener]);

  const init = async () => {
    setInitializing(true);
    const storageTheme = await loadThemeType();
    if (storageTheme) {
      setType(storageTheme);
    }
    setInitializing(false);
  };

  useEffect(() => {
    init();
  }, []);

  const updateMe = (me: MeType) => {
    setMe(me);
  };

  const selectList = (list: string) => {
    setSelectedList(list);
  };

  const toggleTheme = (type: string) => {
    if (type !== 'auto') {
      setTheme(Theme[type].colors);
      setThemeType(type);
    }

    if (type === 'auto') {
      setTheme(Theme[scheme!].colors);
      setThemeType(scheme!);
    }
  };

  const value = {
    me,
    updateMe,
    theme,
    themeType,
    toggleTheme,
    selectedList,
    selectList,
  };

  useEffect(() => {
    if (type === 'auto' && scheme) {
      setTheme(Theme[scheme!].colors);
      setThemeType(scheme!);
    }
  }, [type, scheme]);

  if (initializing) {
    return <LoadingIndicator color={ThemeStatic.accent} size={IconSizes.x1} />;
  }

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};
