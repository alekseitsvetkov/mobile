import React, {Children, ComponentPropsWithRef, ReactNode, cloneElement, isValidElement} from 'react';

import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = ComponentPropsWithRef<typeof View> & {
    /**
     * Items inside the `CardActions`.
     */
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
};

/**
 * A component to show a list of actions inside a Card.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card, Button } from '@skeetry-ui';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 */
const CardActions = (props: Props) => (
    <View {...props} style={[styles.container, props.style]}>
        {Children.map(props.children, (child) =>
            isValidElement(child)
                ? cloneElement(child, {
                      compact: child.props.compact !== false,
                  })
                : child,
        )}
    </View>
);

CardActions.displayName = 'Card.Actions';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 8,
    },
});

export default CardActions;
