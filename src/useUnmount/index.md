---
title: useUnmount
order: 1
nav:
  title: Hooks
  order: 1
  path: /src
group:
  title: 基础Hooks
  path: /basis
---

# useUnmount

在组件初始化执行的 hook

## 代码演示

### 基本用法

<code src="./demo/demo1.tsx" />

## API

```typescript

useUnmount(fn: () => void )

```

### 参数

| 参数 | 说明                 | 类型         | 默认值 |
| ---- | -------------------- | ------------ | ------ |
| fn   | 组件卸载时执行的函数 | `() => void` | -      |
