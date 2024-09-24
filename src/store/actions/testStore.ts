import React from 'react';
import { create } from 'zustand';

/**
 * 참고용 테스트 zustand 함수
 * 간단한 value 증가,감소 기능
 */

interface ISimpleStoreActionProps {
  value: number;
  increment: () => void;
  decrement: () => void;
}
export const useSimpleStore = create<ISimpleStoreActionProps>((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
}));

/**
 * 참고용 테스트 zustand 함수
 * React Ref 값 set 기능
 */
interface IRefControlActionProps {
  ref: React.LegacyRef<any> | null;
  setRef: (ref: any) => void;
}
export const useRefControlStore = create<IRefControlActionProps>((set) => ({
  ref: null,
  setRef: (ref) => set(() => ({ ref })),
}));
