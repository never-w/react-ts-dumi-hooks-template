import { useCallback, useState } from 'react'

const useUpdate = () => {
  const [_, setState] = useState({})

  return useCallback(() => setState({}), [])
}

export default useUpdate
