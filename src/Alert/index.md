---
nav:
  title: Alert
  path: /wHooks
---

Demo:

```tsx
import React, { useState } from 'react'
import { Alert } from 'wyq-hooks'

export default () => {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <h2>{count}</h2>
      <Alert />
    </>
  )
}
```
