'use client';

import clsx from 'clsx';

export function ParallaxCard({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        'transform-gpu transition duration-200',
        className
      )}
    >
      {children}
    </div>
  );
}
