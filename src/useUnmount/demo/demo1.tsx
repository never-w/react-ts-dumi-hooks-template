/**
 * title: 基础用法
 * desc: 在组件卸载时执行方法。
 */

import React, { useState } from 'react'
import { useUnmount } from 'whooks'
import { message } from 'antd'

const MyComponent = () => {
  useUnmount(() => {
    message.info('Unmount')
  })

  return <div>Hello World</div>
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
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  )
}
