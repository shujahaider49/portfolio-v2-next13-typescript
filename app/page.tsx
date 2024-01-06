import Section from '@/components/section'
import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title:"Portfolio - Home - Shuja Haider",
}

export default function Home({children}: {children : ReactNode}) {
  return (
    <>
    <div>
    <div className="">
        <ul className="circles blur-sm">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <Section />
      </div>
    </div>
    </>
  )
}
