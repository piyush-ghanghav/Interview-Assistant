"use client"

import { db } from '../../../utils/db';
import { MockInterview } from '../../../utils/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';
import Link from 'next/link';

interface InterviewListProps {
  limit?: number;
  showViewAll?: boolean;
}

// Define the type for interview items
type Interview = typeof MockInterview.$inferSelect;

function InterviewList({ limit, showViewAll = false }: InterviewListProps) {
    const { user } = useUser();
    const [interviewList, setInterviewList] = useState<Interview[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (user) {
            GetInterviewList();
        }
    }, [user, limit]);

    const GetInterviewList = async () => {
        try {
            setIsLoading(true);
            setError(null);
            
            const result = await db.select()
                .from(MockInterview)
                .where(eq(MockInterview.createdby, user?.primaryEmailAddress?.emailAddress || ''))
                .orderBy(desc(MockInterview.id))
                .limit(limit || 999);

            setInterviewList(result);
        } catch (err) {
            console.error('Failed to fetch interviews:', err);
            setError('Failed to load interviews. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <div className="col-span-full text-center">Loading interviews...</div>;
    }

    if (error) {
        return <div className="col-span-full text-center text-red-500">{error}</div>;
    }

    return (
        <div>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='font-medium text-xl'>
                    {showViewAll ? 'All Mock Interviews' : 'Recent Sessions'}
                </h2>
                {!showViewAll && interviewList.length > 6 && (
                    <Link 
                        href="/dashboard/interviews" 
                        className="text-sm text-blue-500 hover:text-blue-600"
                    >
                        View all interviews →
                    </Link>
                )}
            </div>

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
                    </div>
                )}
            </div>
        </div>
    )
}

export default InterviewList;