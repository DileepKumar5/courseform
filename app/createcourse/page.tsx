import CardWrapper from '@/components/CardWrapper'
import Createform from '@/components/Createform'
import React from 'react'

const page = () => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <CardWrapper title='Course Form' >
                <Createform/>
            </CardWrapper>

        </div>
    )
}

export default page
