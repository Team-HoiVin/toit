import { useEffect, useState, type PropsWithChildren } from 'react';

import Image from 'next/image';

import { cn } from '@/lib/cssMerge';

import Portal from './Portal';

interface IModal extends PropsWithChildren {
  active: boolean;
  onClose: () => void;
  closeButton?: boolean;
  className?: string;
}

/**
 * Modal
 *
 * `Modal` 컴포넌트는 활성 상태에 따라 화면에 모달을 렌더링합니다.
 * - `active` 상태가 `true`일 때 모달이 화면에 표시됩니다.
 * - 닫기 버튼을 렌더링하거나 커스텀 스타일을 적용할 수 있습니다.
 * - 배경 클릭 또는 닫기 버튼을 통해 `onClose` 콜백을 호출합니다.
 *
 * @param {boolean} active - 모달 활성화 상태를 나타냅니다. `true`일 경우 모달을 렌더링합니다.
 * @param {Function} onClose - 모달을 닫는 함수입니다. 배경 클릭 또는 닫기 버튼 클릭 시 호출됩니다.
 * @param {boolean} closeButton - 상단에 닫기 버튼을 렌더링할지 여부를 결정합니다. 기본값은 `false`입니다.
 * @param {string} className - 모달 스타일을 커스터마이징할 수 있는 클래스 이름입니다. 주로 모달의 크기와 레이아웃을 조정하는 데 사용됩니다.
 * @param {React.ReactNode} children - 모달 내부에 렌더링할 자식 요소입니다.
 */

const Modal = ({
  active,
  children,
  onClose,
  closeButton,
  className,
}: IModal) => {
  const [visible, setVisible] = useState<boolean>(active);

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    if (active) {
      setVisible(true);
    } else {
      timer = setTimeout(() => {
        setVisible(false);
      }, 300);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [active]);

  return (
    visible && (
      <Portal>
        <div className='fill-mode-forwards fixed inset-0'>
          <div
            className={cn(
              'fixed -z-[1] size-full bg-black/50',
              active ? 'animate-fade-in' : 'animate-fade-out',
            )}
            onClick={onClose}
          />
          <div
            className={cn(
              'absolute bottom-0 left-0 right-0 w-full rounded-[1.2rem] rounded-b-none bg-background-secondary px-[1.6rem] pb-[3.2rem] pt-[1.6rem] sm:bottom-auto sm:left-1/2 sm:right-auto sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-b-[1.2rem]',
              active
                ? 'animate-slide-up sm:animate-fade-in'
                : 'animate-slide-down sm:animate-fade-out',
              className,
            )}
          >
            {closeButton && (
              <button
                className='relative ml-auto flex size-[2.4rem]'
                onClick={onClose}
              >
                <Image src={'icons/x.svg'} alt='닫기' fill />
              </button>
            )}
            {children}
          </div>
        </div>
      </Portal>
    )
  );
};

export default Modal;
