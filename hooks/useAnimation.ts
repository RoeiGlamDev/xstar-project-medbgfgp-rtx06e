import { useEffect, useRef } from 'react';

/
 * Custom hook to manage animations for the luxery dark AirBNB website.
 * This hook provides animation utility functions to enhance user experience
 * with elegant transitions and effects, aligning with the high-end design
 * principles of the brand.
 *
 * @module useAnimation
 */

interface AnimationOptions {
  duration?: number; // Duration of the animation in milliseconds
  delay?: number;    // Delay before the animation starts in milliseconds
  easing?: string;   // Easing function for the animation
}

/
 * The useAnimation hook provides a way to manage animations on components
 * for the luxery dark AirBNB website.
 * 
 * @param {AnimationOptions} options - Configuration options for the animation.
 * @returns {React.RefObject<HTMLElement>} - Ref to be attached to the component for animation.
 */
export const useAnimation = (options: AnimationOptions = {}): React.RefObject<HTMLElement> => {
  const elementRef = useRef<HTMLElement>(null);
  const { duration = 300, delay = 0, easing = 'ease-in-out' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      // Apply initial styles for animation
      element.style.transition = all ${duration}ms ${easing};
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';

      // Triggering the animation
      const animate = () => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      };

      const timer = setTimeout(animate, delay);
      return () => clearTimeout(timer);
    }
  }, [duration, delay, easing]);

  return elementRef;
};

/
 * Example usage of useAnimation hook in a component for luxery dark AirBNB
 * 
 * const AnimatedComponent = () => {
 *   const ref = useAnimation({ duration: 500, delay: 100 });
 *   return <div ref={ref} style={{ backgroundColor: 'black', color: 'pink' }}>Welcome to luxery dark AirBNB</div>;
 * };
 */