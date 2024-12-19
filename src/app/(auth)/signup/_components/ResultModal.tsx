import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';

import type { IResultModal } from '../types/signup.types';

const SIGNUP_RESULT_INFO = {
  success: {
    src: 'icons/check_alert.svg',
    title: '회원가입 완료',
    description: '지금 바로 협업의 즐거움과 성과를 함께 경험해보세요.',
  },
  fail: {
    src: 'icons/alert.svg',
    title: '회원가입 실패',
    description: '회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.',
  },
};

/**
 * ResultModal
 *
 * 회원가입 성공/실패 결과를 알리는 모달 컴포넌트입니다.
 * - 회원가입 성공 시, 확인 버튼을 누르면 랜딩 페이지로 이동합니다.
 * - 회원가입 실패 시, 확인 버튼을 누르면 모달만 닫힙니다.
 * - 회원가입 실패는 입력 항목 이외의 이유로 발생한 경우를 가정합니다.
 *
 * @param {'success'|'fail'} result 회원가입 결과를 나타냅니다. 'success' 또는 'fail' 값을 가질 수 있습니다.
 * @param {boolean} modalOpen 모달 활성화 상태를 나타냅니다. `true`일 경우 모달이 열립니다.
 * @param {Function} handleModalClose 모달을 닫는 함수입니다. 모달 닫기 동작을 정의합니다.
 */
const ResultModal = ({ result, modalOpen, handleModalClose }: IResultModal) => {
  const router = useRouter();

  const closeSuccessModal = () => {
    handleModalClose();
    router.push('/');
  };

  return (
    result && (
      <Modal
        active={modalOpen}
        onClose={result === 'success' ? closeSuccessModal : handleModalClose}
        className='sm:max-w-[384px]'
      >
        <div className='px-[3.6rem] pt-[2.4rem]'>
          <Image
            src={SIGNUP_RESULT_INFO[result].src}
            alt='알림'
            width={24}
            height={24}
            className='mx-auto'
          />
          <div className='mt-[1.6rem] grid gap-[0.8rem]'>
            <h5 className='text-center font-medium'>
              {SIGNUP_RESULT_INFO[result].title}
            </h5>
            <p className='break-keep text-center text-md font-medium'>
              {SIGNUP_RESULT_INFO[result].description}
            </p>
          </div>
          <Button
            className='mt-[2.4rem] w-full'
            theme={result === 'fail' ? 'container-danger' : 'container-primary'}
            onClick={
              result === 'success' ? closeSuccessModal : handleModalClose
            }
          >
            확인
          </Button>
        </div>
      </Modal>
    )
  );
};

export default ResultModal;
