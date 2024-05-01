'use client'
import React from 'react'
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'
import useLoginModal from '@/app/hooks/useLoginModal'

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
  userId
}) => {
  const loginModal = useLoginModal();
  const addPropertyModal = useAddPropertyModal();

  const addProperty = () => {
    if (userId) {
      addPropertyModal.open()
    } else {
      loginModal.open()
    }
  }

  return (
    <div
      onClick={addProperty} 
      className='p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200'
    >
        Add your properties!
    </div>
  )
}

export default AddPropertyButton