import {s} from "./styles";
import {tBase, tTitle} from "_app/constants";
import {AppContext} from "_app/context";
import {Button} from "_app/layout";
import {navigation} from "_app/services/navigations";
import {ThemeColors} from "_app/types/theme";
import {normalize} from "_app/utils/dimensions";
import React, {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image as RNImage,
} from "react-native";

export const Gallery = ({images}: GalleryProps) => {
  const {t} = useTranslation();
  const {theme} = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const Image = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          navigation.push("Gallery", {
            images,
            page: currentPage,
          })
        }
      >
        <RNImage style={s.image} source={{uri: item.url}} />
      </TouchableOpacity>
    );
  };

  const onScrollEnd = (e) => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;

    // Divide the horizontal offset by the width of the view to see which page is visible
    let pageNum = Math.floor(contentOffset.x / viewSize.width);
    setCurrentPage(pageNum + 1);
  };

  return (
    <View style={[s.container, styles(theme).container]}>
      <FlatList
        data={[...images, {id: "plusImage", plusImage: true}]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          if (item.plusImage) {
            return (
              <View style={[s.plusImage, styles(theme).plusImage]}>
                <Text style={[tTitle, styles(theme).title]}>
                  {images.length === 0
                    ? t("card:no_images")
                    : t("card:contribute")}
                </Text>
                {images.length === 0 && (
                  <Text style={[tBase, styles(theme).desc]}>
                    {t("card:contribute")}
                  </Text>
                )}
                <Text style={[tBase, styles(theme).secondDesc]}>
                  {t("card:add_your_photo")}
                </Text>
                <Button
                  label={t("card:submit_photo")}
                  onPress={() => Alert.alert(t("utils:wip"))}
                  loading={false}
                  containerStyle={styles(theme).button}
                />
              </View>
            );
          }
          return <Image item={item} />;
        }}
        keyExtractor={(item) => item.id}
        decelerationRate="fast"
        pagingEnabled={true}
        onMomentumScrollEnd={onScrollEnd}
      />

      <View style={s.pager}>
        <Text style={styles(theme).text}>
          {currentPage}/{images.length + 1}
        </Text>
      </View>
    </View>
  );
};

const styles = (theme = {} as ThemeColors) =>
  StyleSheet.create({
    container: {
      borderBottomColor: theme.gray01,
      borderBottomWidth: 1,
    },
    text: {
      color: theme.white,
    },
    title: {
      marginBottom: normalize(10),
      color: theme.text01,
    },
    desc: {
      marginBottom: normalize(5),
      color: theme.text01,
    },
    secondDesc: {
      marginBottom: normalize(15),
      color: theme.text01,
    },
    plusImage: {
      backgroundColor: theme.gray04,
    },
    button: {
      backgroundColor: theme.placeholder,
    },
  });
