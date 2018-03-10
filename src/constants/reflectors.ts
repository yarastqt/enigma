import { Alphabet } from './alphabet'

export type Reflectors = {
  [key: number]: Alphabet
}

export const reflectors = {
  1: [
    'A-Y', 'B-R', 'C-U', 'D-H', 'E-Q', 'F-S', 'G-L',
    'I-P', 'J-X', 'K-N', 'M-O', 'T-Z', 'V-W'
  ]
}
