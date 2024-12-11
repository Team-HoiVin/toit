import TitleContentLayout from '@/components/common/TitleContentLayout';

import SocialLogin from '../_components/SocialLogin';

import LoginSection from './_components/LoginSection';

const LoginPage = () => {
  return (
    <TitleContentLayout title='로그인'>
      <LoginSection />
      <SocialLogin title='간편 로그인하기' />
    </TitleContentLayout>
  );
};

export default LoginPage;
