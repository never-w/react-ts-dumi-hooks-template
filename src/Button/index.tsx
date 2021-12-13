import React, { FC } from 'react'

interface IProps {
  /**
   * 可以这样写属性描述
   * @description       类名
   * @default           btn
   */
  className?: string
}

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
