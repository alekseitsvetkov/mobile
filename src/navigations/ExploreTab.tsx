import { createMaterialTopTabNavigator, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Animated, View, TouchableOpacity } from 'react-native';

import { tTitle } from '_app/constants';
import { LocationsScreen, PlacesScreen } from '_app/screens';
import { normalize } from '_app/utils/dimensions';

const Tab = createMaterialTopTabNavigator();

// TODO: move to components
function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: normalize(10), marginBottom: normalize(20) }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.4)),
        });

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.6}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ marginRight: normalize(20) }}
          >
            <Animated.Text style={{ ...tTitle, opacity }}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const ExploreTabs = () => {
  const screenOptions: MaterialTopTabNavigationOptions = {
    // tabBarIndicatorContainerStyle: {
    //   display: 'none',
    // },
    // tabBarStyle: {
    //   display: 'none',
    // },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen name="Locations" component={LocationsScreen} />
      <Tab.Screen name="Places and sights" component={PlacesScreen} />
    </Tab.Navigator>
  );
};

export default ExploreTabs;
