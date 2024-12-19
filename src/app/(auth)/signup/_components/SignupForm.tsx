'use client';

import { useId, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import useModalState from '@/hooks/useModalState';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'universal-cookie';

import Button from '@/components/button/Button';
import FormControl from '@/components/form/FormControl';
import FormLabel from '@/components/form/FormLabel';
import Input from '@/components/input/Input';

import type { IErrorResponse, ISignup } from '../_types/signup.interface';
import { signUpMutationFn } from '../_utils/mutation';
import {
  EMAIL_PATTERN,
  PASSWORD_PATTERN,
} from '../../_constants/validationPatterns';
import type { IResult } from '../types/signup.types';

import ResultModal from './ResultModal';

const cookies = new Cookies();

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    trigger,
    formState: { errors, isValid },
  } = useForm<ISignup>({ mode: 'onChange' });
  const [signUpResult, setSignUpResult] = useState<IResult>(null);
  const { modalOpen, handleModalOpen, handleModalClose } = useModalState();

  const nicknameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const passwordConfirmId = useId();

  const passwordValue = watch('password');
  const passwordConfirmValue = watch('passwordConfirmation');

  const signUpMutation = useMutation({
    mutationFn: signUpMutationFn,
    onSuccess: (res) => {
      cookies.set('accessToken', res.accessToken);
      cookies.set('refreshToken', res.refreshToken);
      setSignUpResult('success');
      handleModalOpen();
    },
    onError: (error: IErrorResponse) => {
      console.error('Failed to Sign Up', error);

      const errorKeys = Object.keys(error.details) as Array<
        keyof typeof error.details
      >;

      // 회원가입 항목 관련 오류가 아닐 경우 회원가입 실패 모달 오픈
      if (errorKeys[0]) {
        setError(errorKeys[0], { message: error.message });
      } else {
        setSignUpResult('fail');
        handleModalOpen();
      }
    },
  });

  const validateMatchingPasswords = () => {
    if (passwordConfirmValue) {
      trigger(['password', 'passwordConfirmation']);
    }
  };

  const onSubmit: SubmitHandler<ISignup> = (data: ISignup) => {
    signUpMutation.mutate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='grid gap-16'>
        <div className='grid gap-[2.4rem]'>
          {/* Nickname Field */}
          <FormControl>
            <FormLabel htmlFor={nicknameId}>이름</FormLabel>
            <Input
              placeholder='이름을 입력해 주세요.'
              id={nicknameId}
              error={Boolean(errors.nickname)}
              helperText={errors.nickname?.message}
              {...register('nickname', {
                required: '닉네임은 필수 입력입니다.',
                maxLength: {
                  value: 20,
                  message: '닉네임은 최대 20자까지 가능합니다.',
                },
              })}
            />
          </FormControl>
          {/* Email Field */}
          <FormControl>
            <FormLabel htmlFor={emailId}>이메일</FormLabel>
            <Input
              id={emailId}
              type='email'
              placeholder='이메일을 입력해 주세요.'
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              {...register('email', {
                required: '이메일은 필수 입력입니다.',
                pattern: {
                  value: EMAIL_PATTERN,
                  message: '이메일 형식으로 작성해 주세요.',
                },
              })}
            />
          </FormControl>
          {/* Password Field */}
          <FormControl>
            <FormLabel htmlFor={passwordId}>비밀번호</FormLabel>
            <Input
              password
              id={passwordId}
              placeholder='비밀번호를 입력해 주세요.'
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              {...register('password', {
                required: '비밀번호는 필수 입력입니다.',
                minLength: {
                  value: 8,
                  message: '비밀번호는 최소 8자 이상입니다.',
                },
                pattern: {
                  value: PASSWORD_PATTERN,
                  message:
                    '비밀번호는 숫자, 영문, 특수문자(!@#$%^&*)로만 가능합니다.',
                },
                onChange: validateMatchingPasswords,
              })}
            />
          </FormControl>
          {/* Password Confirmation Field */}
          <FormControl>
            <FormLabel htmlFor={passwordConfirmId}>비밀번호 확인</FormLabel>
            <Input
              password
              id={passwordConfirmId}
              placeholder='비밀번호를 다시 한 번 입력해 주세요.'
              error={Boolean(errors.passwordConfirmation)}
              helperText={errors.passwordConfirmation?.message}
              {...register('passwordConfirmation', {
                required: '비밀번호 확인을 입력해주세요.',
                validate: (value) =>
                  value === passwordValue || '비밀번호가 일치하지 않습니다.',
                onChange: validateMatchingPasswords,
              })}
            />
          </FormControl>
        </div>
        <Button
          type='submit'
          disabled={!isValid}
          isLoading={signUpMutation.isPending}
        >
          회원가입
        </Button>
      </form>
      <ResultModal
        result={signUpResult}
        modalOpen={modalOpen}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default SignupForm;
