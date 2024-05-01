import React from 'react'
import Image from 'next/image';

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
  return (
    <div className='pt-3 cursor-pointer pb-6 flex items-center space-x-12'>
        <div 
            onClick={() => setCategory('Pool')}
            className={`pb-4 flex flex-col items-center spacx-y-2 border-b-2 ${dataCategory == 'Pool' ? `border-gray-800` : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
            <Image src="/pool_category.jpg" alt="pool" width={40} height={40}/>
            <span className='text-sm'>Pool</span>
        </div>

        <div 
            onClick={() => setCategory('Boat')}
            className={`pb-4 flex flex-col items-center spacx-y-2 border-b-2 ${dataCategory == 'Boat' ? `border-gray-800` : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
            <Image src="/boat_category.jpg" alt="pool" width={40} height={40}/>
            <span className='text-sm'>Boat</span>
        </div>
        
        <div
            onClick={() => setCategory('Snow')}
            className={`pb-4 flex flex-col items-center spacx-y-2 border-b-2 ${dataCategory == 'Snow' ? `border-gray-800` : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
            <Image src="/snow_category.jpg" alt="pool" width={40} height={40}/>
            <span className='text-sm'>Snow</span>
        </div>

        <div 
            onClick={() => setCategory('Camp')}
            className={`pb-4 flex flex-col items-center spacx-y-2 border-b-2 ${dataCategory == 'Camp' ? `border-gray-800` : 'border-white'} opacity-60 hover:opacity-100 hover:border-gray-200`}
        >
            <Image src="/camp_category.jpg" alt="pool" width={40} height={40}/>
            <span className='text-sm'>Camp</span>
        </div>
    </div>
  )
}

export default Categories