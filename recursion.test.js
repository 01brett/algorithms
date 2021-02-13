// @ts-nocheck

test('nth position of fibonacci', () => {
  function fib(num) {
    // base case
    if (num < 2) {
      return num
    }
    // recursion
    return fib(num - 1) + fib(num - 2)
  }

  expect(fib(7)).toBe(13)
  expect(fib(9)).toBe(34)
  expect(fib(10)).toBe(55)
})

test('factorial of any num', () => {
  function fact(num) {
    // base case
    if (num < 2) {
      return 1
    }
    // recursion
    return num * fact(num - 1)
  }

  expect(fact(4)).toBe(24)
  expect(fact(5)).toBe(120)
})

test('greatest common divisor', () => {
  // aka Euclidean Algorithm
  function gcd(num1, num2) {
    // base case
    if (num2 === 0) {
      return num1
    }
    // recursive work
    return gcd(num2, num1 % num2)
  }

  expect(gcd(18, 12)).toBe(6)
  expect(gcd(2154, 458)).toBe(2)
})

test('get intergers in a range', () => {
  // non-inclusive
  function intRange(startNum, endNum) {
    // base case
    if (endNum - startNum === 2) {
      return [startNum + 1]
    }
    // recursive work
    const numArr = intRange(startNum, endNum - 1)
    numArr.push(endNum - 1)
    return numArr
  }

  expect(intRange(2, 8)).toEqual([3, 4, 5, 6, 7])
  expect(intRange(0, 14)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
})

test('sum of array of nums', () => {
  function sumNums(arr) {
    // base case
    if (arr.length < 2) {
      return arr[0]
    }
    // recursion
    return arr.pop() + sumNums(arr)
  }

  expect(sumNums([1, 2, 3, 4, 5])).toBe(15)
})

test('rolling sum of array of nums', () => {
  function rollingSum(arr) {
    // base case
    if (arr.length < 2) {
      return arr
    }
    // the work
    let temp = arr.pop()
    let sumArr = rollingSum(arr)
    sumArr.push(temp + sumArr[sumArr.length - 1])
    return sumArr
  }

  expect(rollingSum([1, 3, 5, 7, 13, 55, 55, 67, 78, 99])).toEqual([1, 4, 9, 16, 29, 84, 139, 206, 284, 383])
})

test('exponent of a num', () => {
  function exp(num, ex) {
    // base case
    if (ex === 0) {
      return 1
    }
    // recursion
    return num * exp(num, ex - 1)
  }

  expect(exp(2, 8)).toBe(256)
  expect(exp(8, 2)).toBe(64)
})

test('array of nth fibonacci nums', () => {
  function fn(num) {
    // base case
    if (num < 2) {
      return [0, 1]
    }
    // the work
    const arr = fn(num - 1)
    arr.push(arr[num - 1] + arr[num - 2])
    return arr
  }

  expect(fn(9)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  expect(fn(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
})

test('is this num even', () => {
  function isEven(num) {
    // base cases
    if (num < 0) {
      num = Math.abs(num)
    }
    if (num === 0) {
      return true
    }
    if (num === 1) {
      return false
    }
    // the work
    return isEven(num - 2)
  }

  expect(isEven(234)).toBe(true)
  expect(isEven(5)).toBe(false)
  expect(isEven(-44)).toBe(true)
  expect(isEven(-45)).toBe(false)
  expect(isEven(0)).toBe(true)
  expect(isEven(1)).toBe(false)
})

test('binary search', () => {
  function binarySearch(arr, target) {
    let guess,
      min = 0,
      max = arr.length - 1

    while (min <= max) {
      guess = Math.floor((min + max) / 2)

      if (arr[guess] === target) {
        return guess
      } else {
        if (arr[guess] < target) {
          min = guess + 1
        } else {
          max = guess - 1
        }
      }
    }
    return -1
  }
  // returns the index of the item
  expect(binarySearch([2, 6, 7, 90, 103], 90)).toBe(3)
})

test('merge sort', () => {
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr
    }

    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    function merge(left, right) {
      const ans = []

      while (left.length && right.length) {
        if (left[0] < right[0]) {
          ans.push(left.shift())
        } else {
          ans.push(right.shift())
        }
      }
      return ans.concat(left, right)
    }

    return merge(mergeSort(left), mergeSort(right))
  }

  expect(mergeSort([2, 5, 1, 3, 7, 2, 3, 8, 6, 3])).toEqual([1, 2, 2, 3, 3, 3, 5, 6, 7, 8])
  expect(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9, 1])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('tree traversal DFS', () => {
  // print the value of every leaf node
  function dfs(node) {
    if (!node) return
    if (!node.left || !node.right) console.log(node.value)

    dfs(node.left)
    dfs(node.right)
  }
})
