import React from 'react'
type Props = {
  children: React.ReactNode;
};

export default function AboutLayout({children}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div style={{border:"2px solid red",margin:"5rem"}}>
        {children}
    </div>
  )
}
