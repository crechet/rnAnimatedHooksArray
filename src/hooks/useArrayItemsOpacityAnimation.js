import { useState, useEffect } from 'react';
import { Animated, Platform } from 'react-native';

export const AnimationConstants = {
    // Use this due to bug in Android opacity animation from 1 to 0 with useNativeDriver: true
    opacityShown: Platform.OS === 'android' ? 1.1 : 1,
    opacityHidden: Platform.OS === 'android' ? 0.0 : 0,
    opacityHalf: 0.5,
    duration: 500
};

const useArrayItemsOpacityAnimation = (
    array = [],
    opacityShown = AnimationConstants.opacityShown,
    opacityHidden = AnimationConstants.opacityHidden,
    isAnimating = false,
    onAnimationFinished = () => {},
    duration = AnimationConstants.duration
) => {
    // Track current index
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    // Keep animated values per item
    const [opacityAnimationArray, setOpacityAnimationArray] = useState(() => {
        return array.map((item, index) => index === 0
            ? new Animated.Value(opacityShown)
            : new Animated.Value(opacityHidden));
    });

    // Start animation
    const animate = () => {
        if (currentItemIndex === array.length - 1) return;

        // Start current item animation hide
        Animated.timing(opacityAnimationArray[currentItemIndex], {
            useNativeDriver: true,
            toValue: opacityHidden,
            duration
        }).start(() => {
            // Start next item animation appear
            Animated.timing(opacityAnimationArray[currentItemIndex + 1], {
                useNativeDriver: true,
                toValue: opacityShown,
                duration
            }).start(() => {
                // Update opacityAnimationArray
                let updatedOpacityArray = [...opacityAnimationArray];
                updatedOpacityArray[currentItemIndex] = new Animated.Value(opacityHidden);
                updatedOpacityArray[currentItemIndex + 1] = new Animated.Value(opacityShown);
                setOpacityAnimationArray(updatedOpacityArray);

                // Increment current slide index in component state
                setCurrentItemIndex(prevSlideIndex => prevSlideIndex + 1);

                onAnimationFinished();
            });
        });
    };

    useEffect(() => {
        if (isAnimating) animate();
    }, [isAnimating]);

    return [currentItemIndex, opacityAnimationArray];
};

export default useArrayItemsOpacityAnimation;