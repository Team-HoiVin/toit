'use client';

import Link from 'next/link';

import LoginForm from './LoginForm';

const LoginSection = () => {
  const handleLogin = () => {
    /**
     * @TODO login 로직 작성 예정
     */
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} />
      <div className='my-[2.4rem] flex flex-wrap items-center justify-center gap-[1.2rem] sm:mb-[4.8rem]'>
        <p className='text-md font-medium leading-[1.2] text-text-primary sm:text-base sm:leading-[1.2]'>
          아직 계정이 없으신가요?
        </p>
        <Link href={'/signup'} className='green-underline leading-normal'>
          가입하기
        </Link>
      </div>
    </div>
  );
};

export default LoginSection;
