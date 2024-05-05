import gsap from 'gsap';

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

export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions: 'restart reverse restart reverse',
            start: 'top 80%',
            ...scrollProps
        }
    })
}