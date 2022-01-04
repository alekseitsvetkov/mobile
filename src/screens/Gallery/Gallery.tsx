import React from 'react';
import Gallery from 'react-native-image-gallery';

import { s } from './style';

export const GalleryScreen = ({ route }) => {
  const { images, page } = route.params;

  return (
    <Gallery initialPage={page - 1} style={s.gallery} images={images.map(i => ({ ...i, source: { uri: i.url } }))} />
  );
};
