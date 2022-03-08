import {LogBox} from 'react-native';

import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';

import {AppProvider} from '_app/core';

import '_app/i18n';

LogBox.ignoreAllLogs(true);

Sentry.init({
    dsn: Constants?.manifest?.extra?.SENTRY_DSN,
    enableAutoPerformanceTracking: true,
    enableAutoSessionTracking: true,
    environment: Constants?.manifest?.extra?.NODE_ENV,
    enableInExpoDevelopment: true,
    tracesSampleRate: 1.0,
});

const App = AppProvider;

export default App;
