import Quiz from '@/components/quiz'
import React from 'react'
const page = () => {
    return (
        <Quiz baseUrl={process.env.BASE_URL} />
    )
}

export default page