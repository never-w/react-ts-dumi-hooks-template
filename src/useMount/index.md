---
title: useMount
order: 0
nav:
  title: Hooks
  order: 1
  path: /src
group:
  title: 基础Hooks
  path: /basis
---

# useMount

在组件初始化执行的 hook

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />

## API

```typescript

useMount(fn: () => void )

```

### 参数

| 参数 | 说明               | 类型         | 默认值 |
| ---- | ------------------ | ------------ | ------ |
| fn   | 初始化时执行的函数 | `() => void` | -      |
