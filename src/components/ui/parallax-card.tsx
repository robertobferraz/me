'use client';

import { useState } from 'react';
import clsx from 'clsx';

export function ParallaxCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [transform, setTransform] = useState(
    'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
  );

  const onMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 6;
    const rotateX = (0.5 - y / rect.height) * 5;
    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`
    );
  };

  const onLeave = () => {
    setTransform(
      'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    );
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform }}
      className={clsx(
        'transform-gpu transition duration-300 will-change-transform',
        className
      )}
    >
      {children}
    </div>
  );
}
