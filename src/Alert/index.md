---
title: Alert-Hook
order: 1
nav:
  title: Hooks
  order: 1
  path: /src
group:
  title: 基础Hooks
  path: /basis
  order: 1
---

Demo:

```tsx
import React, { useState } from 'react'
import { Alert } from 'whooks'

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
