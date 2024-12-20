import React from 'react';

import Image from 'next/image';

import Button from '@/components/button/Button';

import FeatureCard from './_components/FeatureCard';
import { LANDING_FEATURES } from './_constants/landing';

const LandingPage = () => {
  return (
    <>
      <section className='flex aspect-[1920/1080] flex-col justify-between bg-landig-intro-large-img bg-contain bg-top bg-no-repeat pb-[12rem] pt-[8.4rem]'>
        <div className='text-center'>
          <h2 className='mb-8 flex items-center justify-center text-5xl font-semibold'>
            <span>함께 만들어가는 투두 리스트</span>
            <div className='relative ml-[2.4rem] size-[5.6rem]'>
              <Image
                src={'/icons/repair.svg'}
                alt='repair'
                fill
                className='ob'
              />
            </div>
          </h2>
          <p className='inline-block bg-brand-gradient bg-clip-text text-6xl font-semibold text-transparent'>
            TOIT
          </p>
        </div>
        <Button
          pill
          className='mx-auto min-w-[37.3rem] bg-brand-gradient font-semibold'
        >
          지금 시작하기
        </Button>
      </section>
      <section className='pt-[6rem]'>
        <ul className='m-auto box-content grid max-w-[99.6rem] gap-[8rem] p-[2.4rem]'>
          {LANDING_FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              icon={feature.icon}
              description={feature.description}
              reverse={feature.reverse}
              imageBottom={feature.imageBottom}
              className={feature.className}
            />
          ))}
        </ul>
      </section>
      <section className='aspect-[1920/1080] bg-landig-bottom-large-img bg-contain bg-bottom bg-no-repeat pt-[23rem] text-center'>
        <h3 className='mb-[2.4rem] text-4xl font-semibold'>
          지금 바로 시작해보세요
        </h3>
        <p className='text-2xl font-medium'>
          팀원 모두와 같은 방향, 같은 속도로 나아가는 가장 쉬운 방법
        </p>
      </section>
    </>
  );
};

export default LandingPage;
