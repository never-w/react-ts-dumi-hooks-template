---
title: useDestroyedRef
order: 6
nav:
  title: Hooks
  order: 1
  path: /src
group:
  title: 基础Hooks
  path: /basis
---

# useDestroyedRef

获取当前组件是否已经卸载的 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const destroyedRef: { current: boolean } = useDestroyedRef()
```

### Result

| 参数         | 说明             | 类型                   |
| ------------ | ---------------- | ---------------------- |
| destroyedRef | 组件是否已经卸载 | `{ current: boolean }` |
