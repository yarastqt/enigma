import { Alphabet } from './alphabet'

export type Rotors = {
  [key: number]: Alphabet
}

export const rotors: Rotors = {
  1: [
    'E', 'K', 'M', 'F', 'L', 'G', 'D', 'Q', 'V',
    'Z', 'N', 'T', 'O', 'W', 'Y', 'H', 'X', 'U',
    'S', 'P', 'A', 'I', 'B', 'R', 'C', 'J',
  ],
  2: [
    'A', 'J', 'D', 'K', 'S', 'I', 'R', 'U', 'X',
    'B', 'L', 'H', 'W', 'T', 'M', 'C', 'Q', 'G',
    'Z', 'N', 'P', 'Y', 'F', 'V', 'O', 'E',
  ],
  3: [
    'B', 'D', 'F', 'H', 'J', 'L', 'C', 'P', 'R',
    'T', 'X', 'V', 'Z', 'N', 'Y', 'E', 'I', 'W',
    'G', 'A', 'K', 'M', 'U', 'S', 'Q', 'O',
  ]
}
