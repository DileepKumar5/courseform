import CardWrapper from '@/components/CardWrapper'
import Deleteform from '@/components/Deleteform'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
    <CardWrapper title='Delete Course Form' >
        <Deleteform/>
    </CardWrapper>

</div>
  )
}

export default page
