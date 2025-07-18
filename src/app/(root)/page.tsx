"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/dist/client/link'
import Image from 'next/image'
import React from 'react'
import { dummyInterviews } from '../../../constants'
import { Inter } from 'next/font/google'
import InterviewCard from '../../../components/InterviewCard'

const page = () => {
  return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-4'>
        <h2 > Get Interview Ready </h2>
        <p className=' text-lg '>
          Practice job interviews with our platform to boost your confidence and skills. Whether you're preparing for a technical interview or a behavioral one, we have resources to help you succeed.
        </p>
        <Button asChild className='btn-primary'>
          <Link href='/interview-prep'>Start Practicing</Link>
        </Button>
      </div>

      <Image src="/robot.png" alt="robot-png"  width={500} height={500}  className='max-sm:hidden' />

    </section>

    <section className=' flex flex-col gap-4 mt-8'>
      <h2> Your Interviews</h2>
      <div className=' interviews-section'>
        {dummyInterviews.map((interview) => (
          <InterviewCard key={interview.id} {...interview} />
        ))}
        {/* <p> You haven't scheduled any interviews yet.</p> */}

      </div>

    </section>


    <section className=' flex flex-col gap-6 mt-8'>
      <h2> Take An Interview </h2>
      <div className='interviews-section'>
        {dummyInterviews.map((interview) => (
          <InterviewCard key={interview.id} {...interview} />
        ))}
        {/* <p> You don't have any upcoming interviews.</p> */}

      </div>

    </section>
    </>
  )
}

export default page