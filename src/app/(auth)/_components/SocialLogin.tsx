import Image from 'next/image';
import Link from 'next/link';

interface IQuickAuth {
  title: string;
}

const ICONS = [
  {
    href: '#none',
    src: '/icons/google.svg',
    alt: 'Google',
  },
  {
    href: '#none',
    src: '/icons/kakaotalk.svg',
    alt: 'Kakaotalk',
  },
];

/**
 * QuickAuth 컴포넌트
 *
 * 간편 로그인/회원가입 버튼을 렌더링하는 컴포넌트입니다.
 * 소셜 로그인 아이콘을 제공하며, 각 아이콘을 클릭하여 간편 로그인을 진행할 수 있습니다.
 *
 * @param {string} title 회원가입 혹은 로그인 섹션의 제목을 나타냅니다.
 * @TODO 간편 회원가입 및 로그인 로직 추가 필요
 */

const SocialLogin = ({ title }: IQuickAuth) => {
  return (
    <div className='grid gap-[1.6rem]'>
      <div>
        <p className='auth-divider flex items-center gap-[2.4rem] text-center text-white'>
          OR
        </p>
      </div>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <p className='font-medium text-white'>{title}</p>
        <ul className='flex gap-[1.6rem]'>
          {ICONS.map((icon, idx) => (
            <li key={idx} className='size-[42px]'>
              <Link href={icon.href} className='relative flex size-full'>
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  fill
                  priority
                  sizes='maxWidth:100%'
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SocialLogin;
