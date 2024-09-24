'use client';

import { useSimpleStore, useRefControlStore } from '@/store';
import React from 'react';

const ZustandTest = () => {
  const { value: count, increment, decrement } = useSimpleStore();
  const { setRef: setStoreRef } = useRefControlStore();

  return (
    <div ref={setStoreRef}>
      <div>{count}</div>
      <div className='flex gap-2'>
        <button type='button' className='bg-slate-300 p-1' onClick={increment}>
          증가
        </button>
        <button type='button' className='bg-slate-300 p-1' onClick={decrement}>
          감소
        </button>
      </div>
    </div>
  );
};

export default ZustandTest;
