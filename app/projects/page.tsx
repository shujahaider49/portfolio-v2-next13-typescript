import React from 'react'
import ProjectCards from './_components/project-cards'
import { Metadata } from 'next'

export const metadata:Metadata = {
    title: "Projects - Shuja Haider"
}

const page = () => {
  return (
    <div>
      <ProjectCards />
    </div>
  )
}

export default page
