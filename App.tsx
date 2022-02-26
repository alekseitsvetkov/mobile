import {LogBox} from 'react-native';

import * as Sentry from 'sentry-expo';
import Config from 'react-native-config';

import {AppProvider} from '_app/core';

import '_app/i18n';

LogBox.ignoreAllLogs(true);

// export const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
    dsn: Config.DSN,
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    enableAutoPerformanceTracking: true,
    enableAutoSessionTracking: true,
    // Sessions close after app is 10 seconds in the background.
    environment: Config.NODE_ENV,
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

// import {loadThemeType} from '_app/utils/storage';
// import {ThemeStatic} from '_app/theme/Colors';
// import RootStackNavigation from '_app/navigations';
// import {LoadingIndicator} from '_app/layout';
// import {AppContext, AppContextProvider} from '_app/context';
// import {IconSizes} from '_app/constants';

// const SafeAreaApp = () => {
//     const {toggleTheme} = useContext(AppContext);

//     const [initializing, setInitializing] = useState(true);

//     const initializeTheme = async () => {
//         setInitializing(true);
//         const storageTheme = await loadThemeType();
//         if (storageTheme) {
//             toggleTheme(storageTheme);
//         }
//         setInitializing(false);
//     };

//     useEffect(() => {
//         initializeTheme();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     if (initializing) {
//         return <LoadingIndicator color={ThemeStatic.accent} size={IconSizes.x1} />;
//     }

//     return <RootStackNavigation />;
// };
