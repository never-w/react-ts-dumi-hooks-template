function isObject(value) {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

function debounce(func, wait, options) {
  let lastArgs, lastThis, maxWait, result, timerId, lastCallTime // lastCallTime其实就是debounced函数每次被调用时所记录的时间。

  let lastInvokeTime = 0 // lastInvokeTime: func 函数最近一次执行时所记录的时间。
  let leading = false
  let maxing = false
  let trailing = true

  if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  wait = +wait || 0

  function invokeFunc(time) {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }

  function startTimer(pendingFunc, wait) {
    return setTimeout(pendingFunc, wait)
  }

  function cancelTimer(id) {
    clearTimeout(id)
  }

  //判断当前时间是否能调用func:
  //1.首次调用debouncedFunc
  //2.距离上一次debouncedFunc调用后已延迟wait毫秒
  //3.func调用总延迟达到maxWait毫秒
  //4.系统时间倒退
  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime

    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxing && timeSinceLastInvoke >= maxWait)
    )
  }

  // 延时器回调   根据当前时间判断是否应该调用？       timerExpired:---> 过期时间
  function timerExpired() {
    const time = Date.now()
    if (shouldInvoke(time)) {
      return trailingEdge(time)
    }
    // Restart the timer.
    timerId = startTimer(timerExpired, remainingWait(time))
  }

  // 延时开始前
  // 记录最后一次调用 func 函数的时间。
  // 开启一个定时器，wait 时间后执行 timeExpired 函数。
  // 如果需要第一次调用的时候执行则立刻执行func函数并返回值，否则直接返回result。
  function leadingEdge(time) {
    lastInvokeTime = time
    timerId = startTimer(timerExpired, wait)
    return leading ? invokeFunc(time) : result
  }

  // 计算剩余的延时时间：
  //1. 不存在maxWait：(上一次debouncedFunc调用后)延时不能超过wait
  //2. 存在maxWait：func调用不能被延时超过maxWait
  //根据这两种情况计算出最短时间
  function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall

    return maxing ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting
  }

  // 延时结束后
  function trailingEdge(time) {
    timerId = undefined

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time)
    }
    lastArgs = lastThis = undefined
    return result
  }

  function cancel() {
    if (timerId !== undefined) {
      cancelTimer(timerId)
    }
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now())
  }

  function pending() {
    return timerId !== undefined
  }

  function debounced(...args) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time)

    lastArgs = args
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
      //timerId不存在有两种原因： 1.首次调用、2.上次延时调用结束
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }

      // 存在func调用最长延时限制时，执行func并启动下一次延时，可实现throttle
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }

    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait)
    }

    return result
  }

  debounced.cancel = cancel
  debounced.flush = flush
  debounced.pending = pending
  return debounced
}
