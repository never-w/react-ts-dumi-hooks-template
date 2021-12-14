import { useEffect } from 'react'

/**
 * @description.zh-CN       初始化时的执行函数
 * @default           -
 */
type Params = () => void

const useMount = (fn?: Params) => {
  // if (process.env.NODE_ENV === 'development') {
  //   if (typeof fn !== 'function') {
  //     console.error(`useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`)
  //   }
  // }

  useEffect(() => {
    fn?.()
  }, [])
}

export default useMount
