import { Button } from './@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function InterviewItemCard({interview}) {

    const router=useRouter();

    const onStart=()=>{
        router.push('/dashboard/inteview/'+interview?.mockId)
    }

    const onFeedbackPress=()=>{
        router.push('/dashboard/inteview/'+interview.mockId+"/feedback")
    }
    
  return (
    <div className='border border-white/10 bg-white/5 shadow-sm backdrop-blur rounded-lg p-3'>
        <h2 className='font-bold text-white'>{interview?.jobPosition}</h2>
        <h2 className='text-sm text-white/80'>{interview?.jobExp} Years of Experience</h2>
        <h2 className='text-xs text-white/60'>Created At:{interview.createdat}</h2>
        <div className='flex justify-between mt-2 gap-5'>
            <Button size="sm" variant="outline" className="w-full"
            onClick={onFeedbackPress}
            >Feedback</Button>
            <Button size="sm" className="w-full"
            onClick={onStart}
            >Start</Button>

        </div>
    </div>
  )
}

export default InterviewItemCard