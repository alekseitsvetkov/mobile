import faker from 'faker';
import React from 'react';
import { View, Animated, Dimensions } from 'react-native';

import { Slide } from './Slide';
import { s } from './styles';

const { width } = Dimensions.get('screen');

faker.seed(10);

const images = [
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1634582989477-a237f47cde93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80',
  },
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1634829540951-12d7cb4b5568?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
  },
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1634307449316-e85197d0d4f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDcxfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1634261974206-d1e4a328e1ed?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1634220107230-9f157bf90a4e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1634643172134-c9e93dec8b87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80',
  },
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1625191406891-35d01912d82b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
  },
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1633621739699-b85dd0415bb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
  },
  {
    type: 'image',
    source:
      'https://images.unsplash.com/photo-1633637516686-c226834bb58a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
  },
];

const slides = [...Array(10).keys()].map(() => {
  return {
    key: faker.random.uuid(),
    data: faker.random.arrayElements(faker.helpers.shuffle([...images]), faker.random.number(4) + 1),
  };
});

const perspective = width;
const angle = Math.atan(perspective / (width / 2));

export const StoriesScreen = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isScrolling, setIsScrolling] = React.useState(0);
  const ref = React.useRef();
  return (
    <View style={s.container}>
      <Animated.FlatList
        ref={ref}
        data={slides}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: true,
        })}
        pagingEnabled
        onScrollBeginDrag={() => setIsScrolling(true)}
        onScrollEndDrag={() => setIsScrolling(false)}
        onMomentumScrollEnd={ev => {
          setActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width));
        }}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 0.5) * width, index * width, (index + 0.5) * width];
          const rotateY = scrollX.interpolate({
            inputRange,
            outputRange: [`${angle / 2}rad`, '0rad', `-${angle / 2}rad`],
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          const translateX1 = scrollX.interpolate({
            inputRange,
            outputRange: [-width / 2, 0, width / 2],
            extrapolate: 'clamp',
          });
          const translateX2 = scrollX.interpolate({
            inputRange,
            outputRange: [width / 2, 0, -width / 2],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              style={{
                opacity,
                transform: [
                  { perspective: width * 4 },
                  { translateX: translateX1 },
                  { rotateY },
                  { translateX: translateX2 },
                ],
              }}
            >
              <Slide
                item={item}
                index={index}
                active={index === activeIndex}
                onNextSlide={() => {
                  ref?.current?.scrollToOffset({
                    offset: (index + 1) * width,
                    animated: true,
                  });
                }}
                isScrolling={isScrolling}
                onPrevSlide={() => {
                  ref?.current?.scrollToOffset({
                    offset: (index - 1) * width,
                    animated: true,
                  });
                }}
              />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};
