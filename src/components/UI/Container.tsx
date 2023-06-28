import React, { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-7xl p-4 mx-auto">{children}</div>
}
