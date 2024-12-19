'use client';

import { useEffect, useState, type PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps extends PropsWithChildren {
  id?: string;
}

/**
 * Portal
 *
 * 자식 요소를 `body` 하단에 동적으로 생성된 DOM 요소에 렌더링하는 컴포넌트입니다.
 * React 포탈을 활용하여 DOM 계층 구조 외부에서 렌더링할 때 사용됩니다.
 *
 * @param {React.ReactNode} children - 렌더링할 자식 요소입니다.
 * @param {string} id - 동적으로 생성되는 컨테이너 DOM 요소의 `id`입니다. 기본값은 `__next-portal`입니다.
 */

const Portal = ({ children, id = '__next-portal' }: IPortalProps) => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement('div');
    el.id = id;
    document.body.appendChild(el);
    setContainer(el);

    return () => {
      el.remove();
    };
  }, [id]);

  return container && createPortal(children, container);
};

export default Portal;
