// @ts-nocheck
it('count matching socks', () => {
  function countSocks(n, arr) {
    const colorCount = {}
    let pairs = 0

    arr.forEach(color => {
      colorCount[color] = colorCount[color] + 1 || 1

      if (colorCount[color] !== 2) {
        return
      }

      pairs += 1
      colorCount[color] = 0
    })

    return pairs
  }

  expect(countSocks(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3)
  expect(countSocks(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3])).toBe(4)
})

it('count valleys on hike', () => {
  function countValleys(path) {
    let level = 0
    let valleyCount = 0

    for (const step of path) {
      if (step === 'U') {
        level += 1
      } else {
        level -= 1
      }

      if (step === 'U' && level === 0) {
        valleyCount += 1
      }
    }

    return valleyCount
  }

  expect(countValleys('UDDDUDUU')).toBe(1)
  expect(countValleys('DDUUDDUDUUUD')).toBe(2)
})

it('jumping on the clouds', () => {
  function jumpClouds(clouds) {
    let jumps = 0

    for (let i = 0; i < clouds.length - 1; ) {
      const stepAmount = clouds[i + 2] === 0 ? 1 : 0
      i += stepAmount + 1
      jumps += 1
    }

    return jumps
  }

  expect(jumpClouds([0, 0, 1, 0, 0, 1, 0])).toBe(4)
  expect(jumpClouds([0, 0, 0, 0, 1, 0])).toBe(3)
})

it('count a in inf str', () => {
  function fn(str, length) {
    // count letter a in the string
    let wholeStrCount = 0
    for (const char of str) {
      if (char === 'a') {
        wholeStrCount += 1
      }
    }
    // figure out remaining characters of the string within the length window
    const remainder = length % str.length
    const dividedEvenly = Math.floor(length / str.length)
    // apply the remainder to a partial bit of the string
    let partialStrCount = 0
    for (let i = 0; i < remainder; i = +1) {
      const char = str[i]

      if (char === 'a') {
        partialStrCount += 1
      }
    }
    // return the total number of a's
    return dividedEvenly * wholeStrCount + partialStrCount
  }

  expect(fn('aba', 10)).toBe(7)
  expect(fn('a', 100000000000)).toBe(100000000000)
  expect(
    fn(
      'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm',
      736778906400
    )
  ).toBe(51574523448)
})

it('a very big sum', () => {
  function fn(arr) {
    return arr.reduce((acc, num) => acc + num, 0)
  }

  expect(fn([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])).toBe(5000000015)
})

it('min max sum', () => {
  function fn(arr) {
    arr.sort((a, b) => a - b)

    const min = arr.slice(0, arr.length - 1).reduce((sum, num) => sum + num, 0)

    const max = arr.slice(1, arr.length).reduce((sum, num) => sum + num, 0)

    return `${min} ${max}`
  }

  expect(fn([1, 2, 3, 4, 5])).toBe('10 14')
  expect(fn([1, 1, 1, 1, 1])).toBe('4 4')
})

it('compare the triplets', () => {
  function fn(a, b) {
    const score = [0, 0]
    for (let i = 0; i < 3; i += 1) {
      if (a[i] > b[i]) {
        score[0] += 1
      }
      if (b[i] > a[i]) {
        score[1] += 1
      }
    }
    return score
  }

  expect(fn([5, 6, 7], [3, 6, 10])).toEqual([1, 1])
  expect(fn([17, 28, 30], [99, 16, 8])).toEqual([2, 1])
})

it('diagonal difference', () => {
  function fn(arr) {
    let startLeft = 0
    let startRight = 0

    arr.forEach((row, i) => {
      const end = row.length - 1
      startLeft += row[i]
      startRight += row[end - i]
    })

    return Math.abs(startLeft - startRight)
  }
  expect(
    fn([
      [1, 2, 3],
      [4, 5, 6],
      [9, 8, 9]
    ])
  ).toBe(2)
  expect(
    fn([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12]
    ])
  ).toBe(15)
  expect(
    fn([
      [-1, 1, -7, -8],
      [-10, -8, -5, -2],
      [0, 9, 7, -1],
      [4, 4, -2, 1]
    ])
  ).toBe(1)
})

it('plus minus', () => {
  function fn(arr) {
    let pos = 0
    let neg = 0
    let zero = 0

    arr.forEach(num => {
      if (num > 0) {
        pos += 1
      } else if (num < 0) {
        neg += 1
      } else {
        zero += 1
      }
    })

    const calc = item => (item / arr.length).toFixed(6)

    return `${calc(pos)} ${calc(neg)} ${calc(zero)}`
  }

  expect(fn([-4, 3, -9, 0, 4, 1])).toBe('0.500000 0.333333 0.166667')
  expect(fn([1, 2, 3, -1, -2, -3, 0, 0])).toBe('0.375000 0.375000 0.250000')
})

it('staircase', () => {
  function fn(n) {
    let staircase = ''
    for (let i = 1; i <= n; i += 1) {
      staircase += ' '.repeat(n - i) + '#'.repeat(i) + '\n'
    }
    return staircase
  }

  expect(fn(6)).toBe('     #\n    ##\n   ###\n  ####\n #####\n######\n')
  expect(fn(1)).toBe('#\n')
})
it('birthday cake candles', () => {
  function fn(arr) {
    var max = { val: 0, count: 0 }

    for (let i = 0; i < arr.length; i += 1) {
      var num = arr[i]

      if (num > max.val) {
        max.val = num
        max.count = 1
      } else if (num === max.val) {
        max.count += 1
      }
    }

    return max.count
  }

  expect(fn([3, 2, 1, 3])).toBe(2)
  expect(fn([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])).toBe(5)
})

it('time conversion', () => {
  function fn(s) {
    var str = s
    var timeOfDay = str.match(/AM|PM/)
    var time = str.replace(/AM|PM/, '')
    var hours = +time.substring(0, 2)
    var minSec = time.substring(2)

    if (timeOfDay[0] === 'AM') {
      return hours === 12 ? `00${minSec}` : time
    }
    if (hours === 12) {
      return time
    }
    return `${hours + 12}${minSec}`
  }

  expect(fn('07:05:45AM')).toBe('07:05:45')
  expect(fn('07:05:45PM')).toBe('19:05:45')
  expect(fn('12:00:00AM')).toBe('00:00:00')
  expect(fn('12:00:00PM')).toBe('12:00:00')
})
