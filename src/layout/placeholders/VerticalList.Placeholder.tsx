// import SkeletonContent from "react-native-skeleton-content";
import React, {useContext} from 'react';

import {FakePlaceholder} from './Fake.Placeholder';
// import {s} from "_app/components/Card/styles";
// import {AppContext} from "_app/context";

export const VerticalListPlaceholder = () => {
    // const {theme} = useContext(AppContext);

    return (
        <FakePlaceholder />
        // <ScrollView
        //   showsVerticalScrollIndicator={false}
        //   scrollEnabled={false}
        //   showsHorizontalScrollIndicator={false}
        //   contentContainerStyle={{margin: 20, marginTop: 0}}
        // >
        //   {[{}, {}, {}].map((_i, index) => (
        //     <SkeletonContent
        //       key={index}
        //       containerStyle={{flex: 1, marginBottom: 20}}
        //       isLoading={true}
        //       highlightColor={theme.gray04}
        //       boneColor={theme.gray01}
        //       layout={[
        //         {
        //           key: "image",
        //           borderRadius: 12,
        //           marginBottom: 10,
        //           ...s.itemSizeFull,
        //         },
        //         {
        //           key: "city",
        //           height: 10,
        //           marginBottom: 10,
        //           ...s.itemFull,
        //         },
        //         {
        //           key: "country",
        //           height: 10,
        //           ...s.itemFull,
        //         },
        //       ]}
        //     />
        //   ))}
        // </ScrollView>
    );
};
