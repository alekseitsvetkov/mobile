import {ListFilterItem} from "_app/components";
import {colors} from "_app/constants";
import React from "react";
import {ScrollView} from "react-native-gesture-handler";
import * as Icon from "react-native-heroicons/solid";

export const ListFilter = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 10, marginBottom: 20}}
    >
      <ListFilterItem
        name="Filter"
        icon={<Icon.FilterIcon size={16} color={colors.black} />}
      />
      <ListFilterItem
        name="Visited"
        icon={<Icon.EyeIcon size={16} color={colors.black} />}
      />
      <ListFilterItem name="Popular" />
      <ListFilterItem name="Mountains" />
      <ListFilterItem name="Sea" />
      <ListFilterItem name="Jungle" />
      <ListFilterItem name="Camping" />
    </ScrollView>
  );
};
