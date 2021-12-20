import { useRef, useMemo } from 'react'

type noop = (...args: any[]) => any

function usePersistFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn)
  // 为什么不使用 `fnRef.current = fn` 是为了修复不能兼容react devtool的问题
  fnRef.current = useMemo(() => fn, [fn])

  const memoizedFn = useRef<T>()
  if (!memoizedFn.current) {
    memoizedFn.current = function (this: T, ...args) {
      return fnRef.current.apply(this, args)
    } as T
  }

  return memoizedFn.current
}

export default usePersistFn
