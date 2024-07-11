import React from 'react'

interface Props{
    children:string;
    color?:'primary' | 'secondary' | 'danger';
    OnClick:()=>void;
}

function Button({children,OnClick,color='primary'}:Props) {
  return (
   <button className={'btn btn-'+color}
    onClick={OnClick}>{children}</button>
  )
}

export default Button
