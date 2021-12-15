---
title: useUpdateEffect
order: 3
nav:
  title: Hooks
  order: 1
  path: /src
group:
  title: 基础Hooks
  path: /basis
---

# useUpdateEffect

`useUpdateEffect` 用法等同于 `useEffect`，但是会忽略首次执行，只在依赖更新时执行。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

API 与 `React.useEffect` 完全一致。

```typescript

useUpdateEffect(
  effect: React.EffectCallback,
  deps?: React.DependencyList,
)

```
