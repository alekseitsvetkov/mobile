import React, { useState, useRef } from 'react';
import { Animated, Dimensions, View, Easing } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const StoryProgress = ({ isLongPressed, done, activeIndex, index, onEnd, active, duration = 2000 }) => {
  const progress = React.useRef(new Animated.Value(-width / 3)).current;
  const [progressWidth, setProgressWidth] = useState(null);
  const longPressElapsedDuration = useRef(0);

  const animation = durations =>
    Animated.timing(progress, {
      toValue: 0,
      duration: durations,
      easing: Easing.linear,
      useNativeDriver: true,
    });

  React.useEffect(() => {
    // we need to store the passed duration so when we
    // release the longpress is going to start the timing
    // from with the elapsed duration.
    const listener = progress.addListener(({ value }) => {
      longPressElapsedDuration.current = Math.abs((value * duration) / progressWidth);
    });

    return () => {
      progress.removeListener(listener);
      progress.removeAllListeners();
    };
  });

  React.useEffect(() => {
    if (isLongPressed) {
      progress.stopAnimation();
    } else {
      if (active) {
        // start animation with elapsed duration
        animation(longPressElapsedDuration.current).start(status => {
          // in case of previous, we need to cancel the animation
          // or move to next when the animation has finished.
          if (status.finished) {
            onEnd(index + 1);
          }
        });
      }
    }
  }, [isLongPressed, progressWidth]);
  React.useEffect(() => {
    progress.setValue(-progressWidth);
    if (active) {
      progress.setValue(-progressWidth);
      animation(duration).start(status => {
        // in case of previous, we need to cancel the animation
        // or move to next when the animation has finished.
        if (status.finished) {
          onEnd(index + 1);
        }
      });
    }

    if (done) {
      progress.setValue(0);
      return;
    }
  }, [active, done]);

  React.useEffect(() => {
    progress.setValue(-progressWidth);
  }, [progressWidth]);

  return (
    <View
      key={index}
      style={{
        height: 2,
        flex: 1,
        overflow: 'hidden',
        marginRight: 8,
        backgroundColor: 'rgba(255,255,255,0.4)',
      }}
    >
      <Animated.View
        onLayout={e => setProgressWidth(e.nativeEvent.layout.width)}
        style={{
          height: 2,
          backgroundColor: 'rgba(255,255,255,0.6)',
          transform: [
            {
              translateX: progress,
            },
          ],
        }}
      />
    </View>
  );
};
