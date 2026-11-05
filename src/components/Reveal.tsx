import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

type Direction = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'span';
}

const directionClass: Record<Direction, string> = {
  up: '',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
};

export default function Reveal({
  children,
  direction = 'up',
  delay,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${directionClass[direction]} ${
        isVisible ? 'is-visible' : ''
      } ${delay ? `[data-delay="${delay}"]` : ''} ${className}`}
      {...(delay ? { 'data-delay': delay } : {})}
    >
      {children}
    </Tag>
  );
}
