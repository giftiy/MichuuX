// src/hooks/useScrollAnimation.js
import { useInView } from 'react-intersection-observer';

const useScrollAnimation = (options = {}) => {
  const defaultOptions = {
    triggerOnce: true,
    threshold: 0.1, // Default threshold
  };
  const mergedOptions = { ...defaultOptions, ...options };
  const { ref, inView } = useInView(mergedOptions);
  return { ref, inView };
};

export default useScrollAnimation;