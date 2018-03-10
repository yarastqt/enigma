import { Alphabet } from '../constants/alphabet'
import { Rotors } from '../constants/rotors'

export type Rotor = {
  [key: string]: {
    char: string
    link: string
  }
}

export function createRotor(rotorSettings: Alphabet, alphabet: Alphabet): Rotor {
  return rotorSettings.reduce((rotor, char, index) => {
    rotor[index] = {
      char: alphabet[index],
      link: alphabet.indexOf(char),
    }
    return rotor
  }, {})
}
