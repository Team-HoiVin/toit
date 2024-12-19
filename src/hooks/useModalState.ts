'use client';

import { useState } from 'react';

const useModalState = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return { modalOpen, handleModalOpen, handleModalClose };
};

export default useModalState;
