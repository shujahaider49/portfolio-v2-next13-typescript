import React from 'react'
import SkillSection from './_components/skill-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Skills - Shuja Haider"
}

const page = () => {
  return (
    <div>
    <SkillSection />  
    </div>
  )
}

export default page
