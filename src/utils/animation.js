export const animateWithGsapTimeLine = (timeLine, rotationRef, rotationState, firstTarget, secondTarget, aminationProps) => {
    timeLine.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut',
    }),

    timeLine.to(firstTarget, {
        ...aminationProps,
        ease: 'power2.inOut',
    }, '<'),
    
    timeLine.to(secondTarget, {
        ...aminationProps,
        ease: 'power2.inOut',
    }, '<')
}