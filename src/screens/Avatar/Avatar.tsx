import {SafeAreaWrapper} from "_app/components";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "_app/utils/dimensions";
import React from "react";
import {Image} from "react-native";

export const AvatarScreen = ({route}) => {
  const {image} = route.params;

  return (
    <SafeAreaWrapper center>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: SCREEN_HEIGHT / 2,
          width: SCREEN_WIDTH,
        }}
      />
    </SafeAreaWrapper>
  );
};
