import { useRef, useEffect } from 'react'
import type { DependencyList, EffectCallback } from 'react'

const useUpdateEffect = (callback: EffectCallback, deps?: DependencyList) => {
  const isMounted = useRef(false)
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
    } else {
      callback()
    }
  }, deps)
}

export default useUpdateEffect
