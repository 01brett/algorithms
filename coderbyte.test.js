// @ts-nocheck
test('question marks madness', () => {
  /*
  Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

  For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
  */
  function fn(str) {
    const strArr = str.replace(/[^\d\?]/gi, '')

    let flag = false
    const temp = []

    for (let i = 0; i < strArr.length; i += 1) {
      const isDigit = /\d/.test(strArr[i])
      if (!isDigit) {
        continue
      }
      temp.push(+strArr[i])
      if (temp.length < 2) {
        continue
      }

      if (temp[0] + temp[1] !== 10) {
        temp.shift()
        continue
      }

      const isQMark = char => /\?/.test(char)
      const exactly3QMarks = isQMark(strArr[i - 1]) && isQMark(strArr[i - 2]) && isQMark(strArr[i - 3])

      if (exactly3QMarks) {
        flag = true
        temp.shift()
      } else {
        flag = false
        break
      }
    } // end for loop
    return flag
  }

  expect(fn('9???1???9???1???9')).toBe(true)
  expect(fn('9??1???9???1???9')).toBe(false)
  expect(fn('9???1???9??1???9')).toBe(false)
  expect(fn('5??aaaaaaaaaaaaaaaaaaa?5?5')).toBe(false)
  expect(fn('aa6?9')).toBe(false)
  expect(fn('acc?7??sss?3rr1??????5')).toBe(true)
  expect(fn('arrb6???4xxbl5???eee5')).toBe(true)
})

test('letter changes', () => {
  /*
  Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
  */

  function fn(str) {
    let newStr = ''
    const alphabet = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z'
    ]
    const vowels = ['a', 'e', 'i', 'o', 'u']

    for (const char of str) {
      const charAlphaIdx = alphabet.findIndex(item => item === char)
      const isAlphabetEnd = charAlphaIdx === alphabet.length - 1

      if (charAlphaIdx > -1) {
        const newChar = isAlphabetEnd ? alphabet[0] : alphabet[charAlphaIdx + 1]
        newStr += vowels.includes(newChar) ? newChar.toUpperCase() : newChar
      } else {
        newStr += char
      }
    }

    return newStr
  }

  expect(fn('hello*3')).toBe('Ifmmp*3')
  expect(fn('zello*3')).toBe('Afmmp*3')
  expect(fn('fun times!')).toBe('gvO Ujnft!')
  expect(fn('oxford')).toBe('pygpsE')
})

test('find intersection', () => {
  /*
  Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
  */
  function fn(arr) {
    const first = arr[0].split(', ')
    const second = arr[1].split(', ')
    const common = []

    first.forEach(num => {
      if (second.includes(num)) {
        common.push(num)
      }
    })

    return common.length ? common.join(',') : false
  }

  expect(fn(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15'])).toBe('1,4,13')
  expect(fn(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10'])).toBe('1,9,10')
  expect(fn(['1, 2, 3, 4, 5', '6, 7, 8, 9, 10'])).toBe(false)
})

test('binary string reversal', () => {
  /*
  Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new reversed string in decimal form. For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111. Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244.
  */
  function fn(str) {
    let num = parseInt(str)
    if (num === 0) {
      return 0
    }
    const arr = []

    while (num > 0) {
      if (num % 2 === 0) {
        arr.unshift(0)
      } else {
        arr.unshift(1)
        num -= 1
      }
      num /= 2
    }
    while (arr.length % 8 !== 0) {
      arr.unshift(0)
    }
    const bin = arr.reverse().join('')
    return parseInt(bin, 2)
  }

  expect(fn('0')).toBe(0)
  expect(fn('213')).toBe(171)
  expect(fn('47')).toBe(244)
  expect(fn('4567')).toBe(60296)
})
