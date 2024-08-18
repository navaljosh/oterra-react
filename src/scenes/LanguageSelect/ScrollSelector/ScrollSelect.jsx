import React, { useState, useRef, useEffect, useCallback } from 'react';

const ScrollSelect = ({ options = [], onSelect, selectedIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const scrollRef = useRef(null);

  const handleScroll = useCallback(() => {
    const { scrollTop, offsetHeight } = scrollRef.current;
    const elementHeight = offsetHeight / 2;
    const index = Math.round(scrollTop / elementHeight);

    if (index !== activeIndex && index >= 0 && index < options.length) {
      setActiveIndex(index);
      onSelect(options[index]);
      // navigator.vibrate(10); // Vibrate on scroll
    }
  }, [activeIndex, onSelect, options]);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [activeIndex, handleScroll]);

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.children[activeIndex]) {
      const element = scrollRef.current.children[activeIndex];
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll',
        height: '150px',
        alignItems: 'center',
        // border: '1px solid #ccc',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth',
      }}
    >
      {/* Adding some top and bottom padding to allow the last item to scroll fully */}
      <div style={{ height: '50px', paddingBottom: 60 }}></div>
      {options.map((option, index) => (
        <div
          key={index}
          style={{
            padding: '20px',
            textAlign: 'center',
            color: index === activeIndex ? '#E03A21' : '#0A0A0A50',
            fontSize: index === activeIndex ? 20 : 14,
            fontWeight: index === activeIndex ? 600 : 400,
            width: '50%',
            scrollSnapAlign: 'center',
            boxSizing: 'border-box',
            transition: 'all .2s ease',
            borderTop: `${index === activeIndex ? '1.5px' : 0} solid #E34125`,
            borderBottom: `${
              index === activeIndex ? '1.5px' : 0
            } solid #E34125`,
            marginBottom: index === options.length - 1 ? 60 : 0,
          }}
        >
          {option.label}
        </div>
      ))}
      <div style={{ height: '50px' }}></div>
    </div>
  );
};

export default ScrollSelect;
