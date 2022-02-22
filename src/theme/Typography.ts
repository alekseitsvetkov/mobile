/**
 * Typography:
 * This contains all the typography config for the application
 * #Note: color and font size are defaulted as they can be overridden
 *        as required.
 */

const FontWeights = {
    Bold: {
        fontFamily: 'Inter_700Bold',
        color: '#000',
    },
    Semibold: {
        fontFamily: 'Inter_600SemiBold',
        color: '#000',
    },
    Regular: {
        fontFamily: 'Inter_400Regular',
        color: '#000',
    },
    Light: {
        fontFamily: 'Inter_300Light',
        color: '#000',
    },
};

const FontSizes = {
    Heading: {
        fontSize: 32,
    },
    SubHeading: {
        fontSize: 24,
    },
    Label: {
        fontSize: 20,
    },
    Body: {
        fontSize: 16,
    },
    Caption: {
        fontSize: 14,
    },
};

const Typography = {FontWeights, FontSizes};

export default Typography;
