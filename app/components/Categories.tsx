'use client'
import React, { useState }from 'react'
import Image from 'next/image'
import useSearchModal, {SearchQuery} from '../hooks/useSearchModal'

const Categories = () => {
    const searchModal = useSearchModal()
    const [category, setCategory] = useState('')

    const _setCategory = (_category: string) => {
        setCategory(_category);

        const query: SearchQuery = {
            country: searchModal.query.country,
            checkIn: searchModal.query.checkIn,
            checkOut: searchModal.query.checkOut,
            guests: searchModal.query.guests,
            bedrooms: searchModal.query.bedrooms,
            bathrooms: searchModal.query.bathrooms,
            category: _category
        }

        searchModal.setQuery(query);
    }

    return (
        <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
            <div
                onClick={() => _setCategory('')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image src="/pool_category.jpg" alt="pool" width={40} height={40}/>
                <span className='text-sm'>All</span>
            </div>
            <div
                onClick={() => _setCategory('Pool')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Pool' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image src="/pool_category.jpg" alt="pool" width={40} height={40}/>
                <span className='text-sm'>Pool</span>
            </div>

            <div
                onClick={() => _setCategory('Boat')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Boat' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image src="/boat_category.jpg" alt="pool" width={40} height={40}/>
                <span className='text-sm'>Boat</span>
            </div>
            
            <div
                onClick={() => _setCategory('Snow')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Snow' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image src="/snow_category.jpg" alt="pool" width={40} height={40}/>
                <span className='text-sm'>Snow</span>
            </div>

            <div
                onClick={() => _setCategory('Camp')} 
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'Camp' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
            >
                <Image src="/camp_category.jpg" alt="pool" width={40} height={40}/>
                <span className='text-sm'>Camp</span>
            </div>
        </div>
    )
}

export default Categories