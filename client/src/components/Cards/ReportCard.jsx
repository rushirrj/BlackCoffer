import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
const ReportCard = ({
    content
}) => {
  return (
    <div>
        <div className='shadow-md flex flex-col p-2  rounded-sm flex-wrap gap-4' style={{minHeight:"290px"}}>
            <div className='font-bold'>{content?.insight}</div>
            <div className='flex flex-row gap-2'>
                <div className='text-sm'>{content?.sector} ,</div>
                <div className='text-sm'>{content?.topic} ,</div>
                <div className='text-sm'>{content?.pestle} </div>
            </div>
            <div className='flex flex-row'>{content?.country}</div>
            <div className='flex flex-row gap-2'>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>intensity : {content?.intensity}</div>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>likelihood : {content?.likelihood}</div>
                <div className='text-xs border-dashed border border-gray-500 p-1 rounded-sm'>relevance : {content?.relevance}</div>
            </div>
            <div className='italic'>{content?.title.substr(0,47)}...</div>
            <hr />
            <div className='flex justify-between '>
                <div>{content?.published}</div>
                <div className='cursor-pointer' onClick={()=>{
                    window.open(content?.url)
                }}>
                <LaunchIcon/>
                <button >URL</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReportCard