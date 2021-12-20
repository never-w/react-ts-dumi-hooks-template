import { useRef } from 'react'

type noop = (...args: any[]) => any

function usePersistFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn)
  fnRef.current = fn

  const memoizedFn = useRef<T>()
  if (!memoizedFn.current) {
    memoizedFn.current = function (this: T, ...args) {
      return fnRef.current.apply(this, args)
    } as T
  }

  return memoizedFn.current
}

export default usePersistFn
