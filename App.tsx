import {LogBox} from 'react-native';

import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';

import {AppProvider} from '_app/core';

import '_app/i18n';

LogBox.ignoreAllLogs(true);

// export const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
    dsn: Constants?.manifest?.extra?.SENTRY_DSN,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    enableAutoPerformanceTracking: true,
    enableAutoSessionTracking: true,
    // Sessions close after app is 10 seconds in the background.
    environment: Constants?.manifest?.extra?.NODE_ENV,
    enableInExpoDevelopment: true,
    tracesSampleRate: 1.0,
    // integrations: [
    //     new Sentry.ReactNativeTracing({
    //         // Pass instrumentation to be used as `routingInstrumentation`
    //         routingInstrumentation,
    //         // ...
    //     }),
    // ],
});

const App = AppProvider;

export default App;
