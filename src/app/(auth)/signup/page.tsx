import TitleContentLayout from '@/components/common/TitleContentLayout';

import SocialLogin from '../_components/SocialLogin';

import SignupForm from './_components/SignupForm';

const SignUpPage = () => {
  return (
    <TitleContentLayout title='회원가입'>
      <div className='grid gap-[2.4rem] lg:gap-[4.8rem]'>
        <SignupForm />
        <SocialLogin title={'간편 회원가입하기'} />
      </div>
    </TitleContentLayout>
  );
};

export default SignUpPage;
