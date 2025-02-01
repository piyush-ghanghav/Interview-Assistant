"use client"
import { db } from '../../../utils/db';
import { MockInterview } from '../../../utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {

    const {user}=useUser();
    const [interviewList,setInterviewList]=useState([]);

    useEffect(()=>{
        user&&GetInterviewList();
    },[user])

    const GetInterviewList=async()=>{
        const result=await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdby,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));

        // console.log(result);
        setInterviewList(result);
    }

  return (
<div>

      <h2 className='font-medium text-xl'>Previous Mock Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
        {interviewList?.length > 0 ? (
          interviewList.map((interview, index) => (
            <InterviewItemCard 
              interview={interview}
              key={index} 
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No interviews yet</h3>
            <p className="text-sm text-gray-500 mb-4">Start your first mock interview to begin practicing</p>
            {/* <Link 
              href="/dashboard/interview/create" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            > */}
              Start First Interview
            {/* </Link> */}
          </div>
        )}
      </div>
    </div>
  )
}

export default InterviewList