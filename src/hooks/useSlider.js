
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


gsap.registerPlugin(ScrollToPlugin);


export const useSlider = (itemCount) => {
  const scrollerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const handleScroll = (direction) => {
    const container = scrollerRef.current;
    if (!container) return;

    const newIndex = Math.max(0, Math.min(itemCount - 1, currentIndex + direction));
    const targetCard = container.children[newIndex];

    if (targetCard) {
      setCurrentIndex(newIndex);
      gsap.to(container, {
        duration: 1.2,
        scrollTo: { x: targetCard },
        ease: "power3.inOut",
      });
    }
  };

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < itemCount - 1;


  return {
    scrollerRef,
    handleScroll,
    canScrollPrev,
    canScrollNext,
  };
};