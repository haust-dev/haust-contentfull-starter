import React, { ReactNode } from 'react'
import Link from 'next/link'

type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="py-8">
      <div className="px-8">
        <Link className="border-b border-black uppercase font-medium" href="/">
          Back to homepage
        </Link>
      </div>
      <div className="px-8 max-w-4xl mx-auto">{children}</div>
    </div>
  )
}
