import React from 'react';

import {View, useColorScheme} from 'react-native';

import {Home, User} from 'iconsax-react-native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HomeScreen, ProfileScreen} from '_app/screens';
import {colors} from '_app/constants';
import {TabBarComponent} from '_app/components/BottomTabBar';

export const iosTransitionSpec = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 10,
        restSpeedThreshold: 10,
    },
};

const Stack = createStackNavigator();

const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            // mode="modal"
            screenOptions={{
                // useNativeDriver: true,
                // gestureEnabled: true,
                headerShown: false,
                ...TransitionPresets.ModalFadeTransition,
                // transitionSpec: {
                //   open: iosTransitionSpec,
                //   close: iosTransitionSpec,
                // },
                cardStyleInterpolator: ({current: {progress}}) => ({
                    cardStyle: {
                        opacity: progress,
                    },
                }),
            }}
            // headerMode="float"
        >
            <Stack.Screen
                component={ProfileScreen}
                name="Profile"
                options={({route}) => ({
                    headerShown: false,
                    headerTitle: 'Home',
                })}
            />
        </Stack.Navigator>
    );
};

// const ExploreStack = () => {
//     return (
//         <Stack.Navigator
//             initialRouteName="Explore"
//             // mode="modal"
//             screenOptions={{
//                 // useNativeDriver: true,
//                 // gestureEnabled: true,
//                 headerShown: false,
//                 ...TransitionPresets.ModalFadeTransition,
//                 // transitionSpec: {
//                 //   open: iosTransitionSpec,
//                 //   close: iosTransitionSpec,
//                 // },
//                 cardStyleInterpolator: ({current: {progress}}) => ({
//                     cardStyle: {
//                         opacity: progress,
//                     },
//                 }),
//             }}
//             // headerMode="float"
//         >
//             <Stack.Screen
//                 component={LocationsScreen}
//                 name="Explore"
//                 options={({route}) => ({
//                     headerShown: false,
//                 })}
//             />
//         </Stack.Navigator>
//     );
// };

// const SwipesStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//         gestureEnabled: true,
//       }}
//     >
//       <Stack.Screen name="Swipes" component={SwipesScreen} />
//     </Stack.Navigator>
//   );
// };

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            // mode="modal"
            screenOptions={{
                // useNativeDriver: true,
                // gestureEnabled: true,
                headerShown: false,
                ...TransitionPresets.ModalFadeTransition,
                // transitionSpec: {
                //   open: iosTransitionSpec,
                //   close: iosTransitionSpec,
                // },
                cardStyleInterpolator: ({current: {progress}}) => ({
                    cardStyle: {
                        opacity: progress,
                    },
                }),
            }}
            // headerMode="float"
        >
            <Stack.Screen
                component={HomeScreen}
                name="HomeScreen"
                options={({route}) => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const HomeTab = () => {
    const screenOptions: BottomTabNavigationOptions = {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => <View style={{backgroundColor: 'black', height: '100%'}} />,
    };

    function getTabBarVisible(route) {
        const routeName = getFocusedRouteNameFromRoute(route);
        const hideOnScreens = ['CardScreen'];

        if (hideOnScreens.indexOf(routeName) > -1) {
            return false;
        }

        return true;
    }

    const theme = useColorScheme();

    return (
        <Tab.Navigator tabBar={TabBarComponent} screenOptions={screenOptions}>
            <Tab.Screen
                options={({route}) => ({
                    tabBarStyle: {
                        display: getTabBarVisible(route) ? 'flex' : 'none',
                        borderTopColor: 'transparent',
                    },
                    tabBarIcon: ({focused}) => (
                        <Home size={20} variant={focused ? 'Bold' : 'Outline'} color={colors.white} />
                    ),
                })}
                component={HomeStack}
                name="HomePage"
            />
            {/* <Tab.Screen
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisible(route) ? 'flex' : 'none',
          },
          tabBarIcon: ({ focused }) => (
            <Icon name="compass" size={20} color={
                focused
                  ? theme === 'dark'
                    ? colors.white
                    : colors.gray900
                  : theme === 'dark'
                  ? colors.gray500
                  : colors.gray300
              } />
          ),
        })}
        component={ExploreStack}
        name="ExplorePage"
      /> */}
            {/* <Tab.Screen
                options={({route}) => ({
                    tabBarStyle: {
                        display: getTabBarVisible(route) ? 'flex' : 'none',
                        borderTopColor: 'transparent',
                    },
                    tabBarIcon: ({focused}) => (
                        <SearchNormal1 size={20} variant={focused ? 'Bold' : 'Outline'} color={colors.white} />
                    ),
                })}
                component={SearchScreen}
                name="Search"
            /> */}
            <Tab.Screen
                options={({route}) => ({
                    tabBarVisible: getTabBarVisible(route),
                    tabBarStyle: {
                        display: getTabBarVisible(route) ? 'flex' : 'none',
                        borderTopColor: 'transparent',
                    },
                    tabBarIcon: ({focused}) => (
                        <User size={20} variant={focused ? 'Bold' : 'Outline'} color={colors.white} />
                    ),
                })}
                component={ProfileStack}
                name="ProfilePage"
            />
        </Tab.Navigator>
    );
};

export default HomeTab;
