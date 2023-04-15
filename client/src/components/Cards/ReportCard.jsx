import React from 'react'

const ReportCard = () => {
  return (
    <div>
        <div className='shadow-md flex flex-col p-2 gap-1 rounded-sm'>
            <div className='font-bold'>Annual Energy Lookout</div>
            <div className='flex flex-row gap-2'>
                <div className='text-sm'>sector</div>
                <div className='text-sm'>topic</div>
                <div className='text-sm'>pestle</div>
            </div>
            <div className='flex flex-row'>country</div>
            <div className='flex flex-row gap-2'>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>intensity : 3</div>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>likelihood : 2</div>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>relevance : 1</div>
            </div>
            <div>title</div>
            <div className='flex justify-between'>
                <div>date</div>
                <div>source</div>
            </div>
        </div>
    </div>
  )
}

export default ReportCard