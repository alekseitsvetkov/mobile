import React from 'react';
import { View, Dimensions, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import { StoryProgress } from './StoryProgress';

const { width, height } = Dimensions.get('screen');

export const Slide = ({ isScrolling, item, index, active, onNextSlide, onPrevSlide }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [duration, setDuration] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setActiveSlide(0);
  }, [active]);

  const goPrev = React.useCallback(
    newSlide => {
      if (newSlide < 0) {
        return onPrevSlide();
      }
      setLoading(true);
      setActiveSlide(newSlide);
    },
    [activeSlide],
  );

  const goNext = React.useCallback(
    newSlide => {
      if (newSlide > item.data.length - 1) {
        return onNextSlide();
      }
      setLoading(true);
      setActiveSlide(newSlide);
    },
    [activeSlide],
  );

  const [isLongPressed, setIsLongPressed] = React.useState(false);

  return (
    <View style={{ width, height }}>
      <View style={[StyleSheet.absoluteFillObject]}>
        <Image
          onLoad={() => {
            setLoading(false);
            setDuration(2000);
          }}
          source={{ uri: item.data[activeSlide].source }}
          style={{ flex: 1 }}
        />
      </View>
      <View style={[StyleSheet.absoluteFillObject, { flexDirection: 'row' }]}>
        <TouchableWithoutFeedback
          delayLongPress={200}
          onPressOut={() => {
            setIsLongPressed(false);
          }}
          onLongPress={() => {
            setIsLongPressed(true);
          }}
          onPress={() => goPrev(activeSlide - 1)}
        >
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          delayLongPress={200}
          onPressOut={() => {
            setIsLongPressed(false);
          }}
          onLongPress={() => {
            setIsLongPressed(true);
          }}
          onPress={() => goNext(activeSlide + 1)}
        >
          <View style={{ backgroundColor: 'transparent', flex: 1 }} />
        </TouchableWithoutFeedback>
      </View>
      <View
        key={`story-progress-${index}`}
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          position: 'absolute',
          top: 50,
        }}
      >
        {item.data.map((_, i) => {
          return (
            <StoryProgress
              isLongPressed={isLongPressed || isScrolling}
              activeIndex={activeSlide}
              index={i}
              key={`story-progress-${index}-${i}`}
              done={activeSlide > i}
              active={activeSlide === i && !loading && active}
              duration={duration}
              onEnd={goNext}
            />
          );
        })}
      </View>
    </View>
  );
};
