import {s} from "./styles";
import {colors} from "_app/constants";
import {navigation} from "_app/services/navigations";
import React from "react";
import {TouchableOpacity, Image} from "react-native";

export const Story = ({url, viewed}: TStoryProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[s.story, viewed && {borderColor: colors.gray200}]}
      onPress={() => {
        navigation.navigate("Stories");
      }}
    >
      <Image
        style={s.storyImage}
        source={{
          uri: url,
        }}
      />
    </TouchableOpacity>
  );
};
