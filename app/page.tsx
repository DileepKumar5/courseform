
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen gap-y-4'>
      <h1 className='flex font-bold text-2xl'>Welcome to the Main Page</h1> 
      <Button asChild>
        <Link href= './createcourse'> Create Course </Link>
      </Button>
      <Button asChild>
        <Link href= './deletecourse'> Delete Course </Link>
      </Button>
      <Button asChild>
        <Link href= './updatecourse'> Update Course </Link>
      </Button>
    </div>
  )
}

export default page
