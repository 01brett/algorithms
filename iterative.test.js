// @ts-nocheck
test('nth fibonacci number', () => {
  function fn(num) {
    const fib = [0, 1]
    if (num > 2) {
      for (let i = 2; i <= num; i += 1) {
        fib[i] = fib[i - 1] + fib[i - 2]
      }
    }
    return fib[num]
  }

  expect(fn(9)).toBe(34)
  expect(fn(10)).toBe(55)
})

test('rolling sum of an array of numbers', () => {
  function fn(arr) {
    const sums = []

    arr.forEach((num) => {
      if (sums.length > 0) {
        num += sums[sums.length - 1]
      }
      sums.push(num)
    })

    return sums
  }

  expect(fn([1, 3, 5, 7, 13, 55, 55, 67, 78, 99])).toEqual([
    1,
    4,
    9,
    16,
    29,
    84,
    139,
    206,
    284,
    383
  ])
})

test('sum of array of numbers', () => {
  function fn(arr) {
    return arr.reduce((acc, num) => acc + num, 0)
  }

  expect(fn([1, 2, 3, 4, 5])).toBe(15)
})

test('get intergers in a range', () => {
  // non-inclusive
  function fn(startNum, endNum) {
    const integers = []
    for (let i = startNum + 1; i < endNum; i += 1) {
      integers.push(i)
    }
    return integers
  }

  expect(fn(2, 8)).toEqual([3, 4, 5, 6, 7])
  expect(fn(0, 14)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
})

it('checks for cycles in directed graph', () => {
  function fn(pairs) {
    // make an adjacency list
    const graph = pairs.reduce((acc, cv) => {
      const parent = cv[0]
      const child = cv[1]
      if (!acc[parent]) {
        acc[parent] = []
      }
      acc[parent].push(child)
      return acc
    }, {})

    // do a dfs
    const stack = []
    const visited = {}

    stack.push(pairs[0][0]) // push the first parent on stack

    while (stack.length > 0) {
      const node = stack.pop()

      if (visited[node] && stack.includes(node)) {
        // we found a cycle
        return 1
      }

      if (!visited[node]) {
        visited[node] = true
      }

      const children = graph[node] // get the child node array for the node

      if (children !== undefined && children.length > 0) {
        children.forEach((child) => {
          stack.push(child)
        })
      }
    }

    const graphLength = Object.keys(graph).length
    const visitedLength = Object.keys(visited).length

    if (graphLength > visitedLength) {
      // this means the graph is messed up as we didn't visit everything
      return -1
    }

    // else return 0 (no cycle)
    return 0
  }
  expect(
    fn([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [3, 6],
      [4, 3],
      [4, 6],
      [5, 6],
      [6, 2]
    ])
  ).toBe(1)
  expect(
    fn([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [3, 6],
      [4, 3],
      [4, 6],
      [5, 6]
    ])
  ).toBe(0)
})
