import React, { useContext, useEffect, useState } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { IconSizes } from '_app/constants';
import { AppContext } from '_app/context';
import { LoadingIndicator } from '_app/layout';
import { ThemeStatic } from '_app/theme';
import { loadThemeType, saveThemeType } from '_app/utils/storage';

import { s } from './styles';

export const OptionList = ({ options }) => {
  const [initializing, setInitializing] = useState(true);
  const [type, setType] = useState<string>();
  const { toggleTheme } = useContext(AppContext);

  const handlePress = async value => {
    setInitializing(true);
    setType(value);
    await saveThemeType(value);
    toggleTheme(value);
    setInitializing(false);
  };

  const init = async () => {
    setInitializing(true);
    const storageTheme = await loadThemeType();

    if (!storageTheme) {
      setType('auto');
    }

    if (storageTheme) {
      setType(storageTheme);
    }
    setInitializing(false);
  };

  useEffect(() => {
    init();
  }, []);

  if (initializing) {
    return <LoadingIndicator color={ThemeStatic.accent} size={IconSizes.x1} />;
  }

  if (!initializing) {
    return (
      <View style={s.optionList}>
        {options.map((o, i) => (
          <TouchableHighlight
            key={o.value}
            underlayColor={'rgba(0,0,0,0.1)'}
            style={s.optionItem}
            onPress={() => handlePress(o.value)}
          >
            <View style={i === options.length - 1 ? s.optionItemWrap : [s.optionItemWrap, s.optionItemBorder]}>
              <Text>{o.name}</Text>
              {o.value === type && <Icon name="check" color="green" size={16} />}
            </View>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
};
