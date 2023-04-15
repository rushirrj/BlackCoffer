import React from 'react'

const ReportCard = ({
    content
}) => {
  return (
    <div>
        <div className='shadow-md flex flex-col p-2 gap-1 rounded-sm'>
            <div className='font-bold'>{content?.insight}</div>
            <div className='flex flex-row gap-2'>
                <div className='text-sm'>{content?.sector}</div>
                <div className='text-sm'>{content?.topic}</div>
                <div className='text-sm'>{content?.pestle}</div>
            </div>
            <div className='flex flex-row'>{content?.country}</div>
            <div className='flex flex-row gap-2'>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>intensity : {content?.intensity}</div>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>likelihood : {content?.likelihood}</div>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>relevance : {content?.relevance}</div>
            </div>
            <div>{content?.title}</div>
            <div className='flex justify-between'>
                <div>{content?.date}</div>
                <button onClick={()=>{
                    window.open(content?.url)
                }}>URL</button>
            </div>
        </div>
    </div>
  )
}

export default ReportCard