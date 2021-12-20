/**
 * title: 基础用法
 * desc: destroyedRef.current 代表组件是否已经卸载
 */

import { useDestroyedRef } from 'whooks'
import { message } from 'antd'
import React, { useEffect, useState } from 'react'

const MyComponent = () => {
  const destroyedRef = useDestroyedRef()
  useEffect(() => {
    setTimeout(() => {
      if (!destroyedRef.current) {
        message.info('组件处于活跃状态')
      }
    }, 2000)
  }, [])

  return <p>Hello World!</p>
}

export default () => {
  const [state, setState] = useState(true)

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setState(!state)
        }}
      >
        {state ? 'destroyed' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  )
}
