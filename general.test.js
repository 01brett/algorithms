// @ts-nocheck
it('is this string a palindrome', () => {
  function fn(string) {
    const cleanString = string.replace(/\W/g, '').toLowerCase()
    return cleanString === cleanString.split('').reverse().join('')
  }

  expect(fn('Racecar')).toBe(true)
  expect(fn('Banana')).toBe(false)
})

it('FizzBuzz', () => {
  function fn(num) {
    const log = []

    for (let i = 1; i <= num; i += 1) {
      const fizz = i % 3 === 0
      const buzz = i % 5 === 0

      if (fizz && buzz) {
        log.push('FizzBuzz')
      } else if (fizz && !buzz) {
        log.push('Fizz')
      } else if (buzz && !fizz) {
        log.push('Buzz')
      } else {
        log.push(i)
      }
    } // end for loop
    return log
  }

  expect(fn(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz'
  ])
})

it('is this number a prime', () => {
  // Sieve of Erastosthenes
  function fn(num) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false
      }
    }
    return num > 1
  }

  expect(fn(13)).toBe(true)
  expect(fn(12)).toBe(false)
})

it('remove duplicates from an array', () => {
  function fn(numbers) {
    const dedupedArr = []
    const numLog = {}

    numbers.forEach((number) => {
      if (!numLog[number]) {
        dedupedArr.push(number)
        numLog[number] = true
      }
    })
    return dedupedArr
  }

  expect(fn([1, 2, 3, 3, 3, 3, 4, 5, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  expect(fn([1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 7, 8, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  expect(fn([4, 4, 5, 2, 6, 1, 6, 2, 2, 2, 2, 1])).toEqual([4, 5, 2, 6, 1])
})

it('are parens balanced', () => {
  function fn(string) {
    const bracketsLog = []
    const openBrackets = {
      '(': ')',
      '{': '}',
      '[': ']'
    }
    const closedBrackets = {
      ')': true,
      '}': true,
      ']': true
    }

    for (const char of string) {
      if (openBrackets[char]) {
        bracketsLog.push(char)
      } else if (closedBrackets[char]) {
        if (openBrackets[bracketsLog.pop()] !== char) {
          return false
        }
      }
    } // end for loop
    return bracketsLog.length === 0
  }

  expect(fn('(((]]]')).toBe(false)
  expect(fn('({[({{}})]})')).toBe(true)
})

it('are the strings anagrams', () => {
  function fn(a, b) {
    const arg1 = a.replace(/\W/g, '').toLowerCase()
    const arg2 = b.replace(/\W/g, '').toLowerCase()

    function getMap(str) {
      const stringMap = {}
      // for...of with strings, arrays
      for (const char of str) {
        stringMap[char] = stringMap[char] + 1 || 1
      }
      return stringMap
    }
    const arg1Map = getMap(arg1)
    const arg2Map = getMap(arg2)

    // for...in with object properties
    for (const char in arg1Map) {
      if (arg1Map[char] !== arg2Map[char]) {
        return false
      }
    }
    return true
  }

  expect(fn('a', 'aaa')).toBe(false)
  expect(fn('rail safety', 'fairy tales')).toBe(true)
  expect(fn('dormitory', 'dirty room')).toBe(true)
  expect(fn('their', 'there')).toBe(false)
  expect(fn('album', 'l.a. bum')).toBe(true)
  expect(fn('the eyes', 'they see')).toBe(true)
  expect(fn('listen', 'silent')).toBe(true)
  expect(fn('farafield', 'faraloft')).toBe(false)
})

it('find most common 3 path sequence', () => {
  function fn(logs) {
    const threePathSequences = {}
    const userPaths = {}
    const mostCommonSequence = { path: null, count: 0 }

    logs.forEach((item) => {
      const [user, path] = item.split(' / ')

      // create the array for the user if there isn't one
      if (!userPaths[user]) {
        userPaths[user] = []
      }
      userPaths[user].push(path) // push the path to our user's path array

      // if we don't have 3 path sequence, exit this iteration of loop
      if (userPaths[user].length !== 3) {
        return
      }

      const key = userPaths[user].join('-') // make path array into a string for obj key
      const currentValue = threePathSequences[key] + 1 || 1 // if key, increment, or assign 1

      threePathSequences[key] = currentValue // set the path to new count value

      if (currentValue > mostCommonSequence.count) {
        // update mostCommonSequence values if current iteration count is greater
        mostCommonSequence.path = key
        mostCommonSequence.count = currentValue
      }

      userPaths[user].shift() // this 3 path sequence is done, pop off front for new combos
    })

    return mostCommonSequence.path.split('-') // return as [1, 2, 3]
  }

  expect(
    fn([
      '1 / 1',
      '1 / 2',
      '1 / 3',
      '2 / 2',
      '2 / 3',
      '2 / 4',
      '3 / 2',
      '3 / 2',
      '1 / 4',
      '4 / 3',
      '4 / 4',
      '4 / 5',
      '4 / 6',
      '4 / 7',
      '1 / 5',
      '2 / 5',
      '5 / 2',
      '5 / 3',
      '5 / 4',
      '5 / 5',
      '2 / 6',
      '5 / 7',
      '6 / 3',
      '6 / 4',
      '6 / 5',
      '3 / 3',
      '7 / 2',
      '7 / 3',
      '7 / 4',
      '7 / 2',
      '6 / 5',
      '6 / 6',
      '3 / 4',
      '7 / 3',
      '7 / 4',
      '3 / 6'
    ])
  ).toEqual(['2', '3', '4'])
})

it('Int to Roman Numerals', () => {
  function fn(num) {
    var numerals = {
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V',
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
      10: 'X',
      20: 'XX',
      30: 'XXX',
      40: 'XL',
      50: 'L',
      60: 'LX',
      70: 'LXX',
      80: 'LXXX',
      90: 'XC',
      100: 'C',
      200: 'CC',
      300: 'CCC',
      400: 'CD',
      500: 'D',
      600: 'DC',
      700: 'DCC',
      800: 'DCCC',
      900: 'CM',
      1000: 'M',
      2000: 'MM',
      3000: 'MMM'
    }

    var str = '' + num
    if (numerals[str]) {
      return numerals[str]
    }
    var rom = ''

    for (let i = 0; i < str.length; i += 1) {
      var digit = str[i]
      if (digit !== '0') {
        var end = str.length - 1
        digit = digit + '0'.repeat(end - i)
        rom += numerals[digit]
      }
    }
    return rom
  }
  expect(fn(36)).toBe('XXXVI')
  expect(fn(2)).toBe('II')
  expect(fn(400)).toBe('CD')
  expect(fn(1004)).toBe('MIV')
  expect(fn(3999)).toBe('MMMCMXCIX')
})
