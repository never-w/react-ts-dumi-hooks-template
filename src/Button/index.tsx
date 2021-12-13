import React, { FC } from 'react'

interface IProps {}

const Button: FC<IProps> = (props) => {
  return (
    <button
      onClick={() => {
        alert('你好啊！')
      }}
    >
      点击
    </button>
  )
}

export default Button
