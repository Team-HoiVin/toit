'use client';

import React from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/cssMerge';

interface ProgressIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number;
  bgColor?: string;
}

/**
 * Progress Icon
 *
 * 커스텀하게 사용할 수 있는 원형 모양의 Progress Icon입니다.
 * @param {number} props.size - Progress Icon의 크기를 결정합니다. 기본값은 16 입니다 * 단위 px 기준
 * @param {string} props.bgColor - Progress Icon의 뒷 원형 배경색을 지정합니다. 기본 색상은 #ffffff 입니다.
 */

const ProgressIcon = (props: ProgressIconProps) => {
  const { size = 16, bgColor = '#ffffff', className } = props;
  const stroke = size / 10;
  const strokeWidth = stroke * 1.7; // 굵기 17px
  const radius = size / 2;
  const spinnerRadius = radius - strokeWidth / 2;
  const spinnerCircumference = Math.round(2 * Math.PI * spinnerRadius);

  return (
    <motion.span
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.4,
        ease: 'linear',
      }}
      className={cn('inline-block text-brand-primary', className)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 ${size} ${size}`}
        className='block stroke-current'
      >
        <motion.circle
          cx={radius}
          cy={radius}
          r={spinnerRadius}
          stroke={bgColor}
          fill='none'
          strokeWidth={strokeWidth}
        />
        <motion.circle
          cx={radius}
          cy={radius}
          r={spinnerRadius}
          stroke={'currentColor'}
          fill='none'
          strokeWidth={strokeWidth}
          strokeDasharray={spinnerCircumference}
          strokeDashoffset={spinnerCircumference}
          animate={{
            strokeDashoffset: [spinnerCircumference, 0, -spinnerCircumference],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: 'easeInOut',
          }}
          style={{
            strokeLinecap: 'round',
          }}
        />
      </svg>
    </motion.span>
  );
};

export default ProgressIcon;
