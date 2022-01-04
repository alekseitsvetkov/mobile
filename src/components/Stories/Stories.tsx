import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Story } from './Story';
import { stories } from './stories.mock';

export const Stories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 10, marginBottom: 10, marginHorizontal: 4, paddingRight: 8 }}
    >
      {stories.map(story => (
        <Story key={story.id} url={story.url} viewed={story.viewed} />
      ))}
    </ScrollView>
  );
};
