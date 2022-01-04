import {s} from "../styles";
import {ProfileStatsItem, Avatar, ProfileFilter} from "_app/components";
import {PLATFORM} from "_app/constants";
import {Button} from "_app/layout";
import {navigation} from "_app/services/navigations";
import {ThemeColors} from "_app/types/theme";
import {signOut} from "_app/utils/authentication";
import React from "react";
import {View, Text, ActionSheetIOS, StyleSheet, Alert} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import * as HeroIcon from "react-native-heroicons/solid";

const logOut = async () => {
  await signOut();
  navigation.navigate("Auth");
};

export const renderHeader = ({...props}) => {
  const {
    user,
    t,
    isMe,
    theme,
    scheme,
    route,
    showActionSheetWithOptions,
    selectList,
  } = props;

  const actionOptions = [
    `${t("utils:cancel")}`,
    `${t("settings:account_settings")}`,
    `${t("utils:check_updates")}`,
    `${t("settings:logout")}`,
  ];

  const onPressSheet = () => {
    PLATFORM.IS_IOS
      ? ActionSheetIOS.showActionSheetWithOptions(
          {
            options: actionOptions,
            destructiveButtonIndex: 3,
            cancelButtonIndex: 0,
            userInterfaceStyle: scheme === "dark" ? "dark" : "light",
          },
          (buttonIndex) => {
            if (buttonIndex === 0) {
              // cancel action
            } else if (buttonIndex === 1) {
              navigation.navigate("Settings");
            } else if (buttonIndex === 2) {
            } else if (buttonIndex === 3) {
              logOut();
            }
          }
        )
      : showActionSheetWithOptions(
          {
            options: actionOptions,
            userInterfaceStyle: scheme === "dark" ? "dark" : "light",
            cancelButtonIndex: 0,
            destructiveButtonIndex: 3,
          },
          (i) => {
            if (i === 0) {
              // cancel action
            } else if (i === 1) {
              navigation.navigate("Settings");
            } else if (i === 2) {
            } else if (i === 3) {
              logOut();
            }
          }
        );
  };

  return (
    <View>
      <View style={[s.profilePanel]}>
        {isMe && route?.name !== "ProfileUser" && (
          <TouchableWithoutFeedback onPress={() => onPressSheet()}>
            <HeroIcon.DotsHorizontalIcon size={22} color={theme.text01} />
          </TouchableWithoutFeedback>
        )}
      </View>
      <View style={[s.profileHeader, styles(theme).profileHeader]}>
        <View style={s.profileHeaderWrap}>
          <TouchableOpacity
            activeOpacity={user.avatar ? 0.7 : 1}
            onPress={() =>
              user.avatar &&
              navigation.push("Avatar", {
                image: user.avatar,
              })
            }
          >
            <Avatar src={user.avatar} username={user.username} />
          </TouchableOpacity>
          <View style={{marginLeft: 10}}>
            {user.name !== null && user.name.length !== 0 && (
              <Text numberOfLines={1} style={[s.name, styles(theme).text]}>
                {user.name}
              </Text>
            )}
            <Text numberOfLines={1} style={[s.username, styles(theme).text]}>
              @{user.username}
            </Text>
            {user.bio !== null && user.bio.length !== 0 && (
              <Text numberOfLines={1} style={[s.bio, styles(theme).text]}>
                {user.bio}
              </Text>
            )}
          </View>
        </View>
        {!isMe && (
          <View style={{paddingTop: 20}}>
            <Button
              label={t("profile:follow")}
              onPress={() => Alert.alert(t("utils:wip"))}
              loading={false}
            />
          </View>
        )}
      </View>

      <View style={[s.profileStats, styles(theme).profileStats]}>
        <ProfileStatsItem
          name={`${t("profile:place")}`}
          number={0}
          action={() => navigation.push("UsersTop")}
        />
        <ProfileStatsItem
          name={`${t("profile:want")}`}
          number={user.wantedCount}
          action={() => selectList("want")}
        />
        <ProfileStatsItem
          name={`${t("profile:visited")}`}
          number={user.visitedCount}
          action={() => selectList("visited")}
        />
        <ProfileStatsItem
          name={`${t("profile:moments")}`}
          number={0}
          action={() => selectList("moments")}
        />
      </View>
      <ProfileFilter />
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    text: {
      color: theme.text01,
    },
    icon: {
      backgroundColor: theme.base,
    },
    profileHeader: {
      backgroundColor: theme.base,
      borderBottomColor: theme.gray01,
    },
    profileStats: {
      backgroundColor: theme.base,
      borderBottomColor: theme.gray01,
    },
  });
