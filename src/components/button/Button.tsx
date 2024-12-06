'use client';

import React from 'react';

import { cn } from '@/lib/cssMerge';

import ProgressIcon from '../icon/ProgressIcon';

import type { ButtonProps } from './types/button.type';

/**
 * Button 공통 컴포넌트
 *
 * 공통 Button 컴포넌트 입니다.
 * @param {ButtonProps} props
 * @param {string} props.size - Button의 크기를 결정합니다. 기본값은 large 입니다.
 * @param {boolean} props.pill - Button의 모서리 둥근정도를 설정합니다. true 일 경우 알약 모양처럼 최대로 둥글게 설정됩니다.
 * @param {string} props.theme - Button의 전체적인 테마를 설정합니다.
 * @param {boolean} [props.isLoading] - 버튼 로딩을 보여주는 상태 값입니다.
 */

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    const {
      size = 'large',
      pill,
      theme = 'container-primary',
      isLoading,
      type,
      className,
      disabled,
      children,
      ...rest
    } = props;

    const buttonThemeClass = cn({
      'btn-container-primary': theme === 'container-primary',
      'btn-container-danger': theme === 'container-danger',
      'btn-outline-primary': theme === 'outline-primary',
      'btn-ghost-primary': theme === 'ghost-primary',
      'btn-ghost-default': theme === 'ghost-default',
    });

    return (
      <button
        ref={ref}
        type={type || 'button'}
        disabled={disabled || isLoading}
        className={cn(
          'relative block px-[1.25rem] font-semibold',
          size === 'large' ? 'h-[4.8rem]' : 'h-[3.2rem] text-md',
          pill ? 'rounded-full' : 'rounded-[1.2rem]',
          disabled ? 'cursor-not-allowed' : '',
          buttonThemeClass,
          className,
        )}
        {...rest}
      >
        {isLoading ? <ProgressIcon size={19} /> : children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default Button;
