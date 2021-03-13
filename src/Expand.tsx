import React, { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  duration: number;
  expand: boolean;
}

const Expand = ({ children, duration = 200, expand }: Props) => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    const handleResize = () => {
      setHeight(ref.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setHeight]);

  const transitionHeight = {
    transition: `max-height ${duration}ms ease-in-out ${expand ? 0 : duration}ms`,
  };

  const transitionOpacity = {
    transition: `opacity ${duration}ms ease-in-out ${expand ? duration : 0}ms`,
  };

  return (
    <div style={{ maxHeight: expand ? height : 0, overflow: expand ? 'visible' : 'hidden', ...transitionHeight }}>
      <div style={{ opacity: expand ? 1 : 0, ...transitionOpacity }}>
        <div ref={ref}>{children}</div>
      </div>
    </div>
  );
};

export default Expand;
