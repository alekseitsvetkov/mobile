import {ColorMode} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

import type {StorageManager} from 'native-base';

export const colorModeManager: StorageManager = {
    get: async () => {
        try {
            const val = await AsyncStorage.getItem('@skeetry_color_mode');
            return val === 'dark' ? 'dark' : 'light';
        } catch (e) {
            console.log(e);
            return 'light';
        }
    },
    set: async (value: ColorMode) => {
        try {
            await AsyncStorage.setItem('@skeetry_color_mode', value);
        } catch (e) {
            console.log(e);
        }
    },
};
