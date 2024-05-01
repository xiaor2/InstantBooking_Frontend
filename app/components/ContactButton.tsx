'use client'
import React from 'react'

import useLoginModal from '../hooks/useLoginModal'
import { useRouter } from 'next/navigation'
import apiService from '../services/apiService'

interface ContactButtonProps {
  userId: string | null;
  landlordId: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  userId,
  landlordId
}) => {
  const loginModal = useLoginModal();
  const router = useRouter();

  const startConversation = async () => {
    if (userId) {
        const conversation = await apiService.get(`/api/chat/start/${landlordId}/`)

        if (conversation.conversation_id) {
            router.push(`/inbox/${conversation.conversation_id}`)
        }
    } else {
        loginModal.open();
    }
  }

  return (
    <div 
      onClick={startConversation}
      className='mt-4 py-4 px-6 cursor-pointer bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition'
    >
      Contact
    </div>
  )
}

export default ContactButton