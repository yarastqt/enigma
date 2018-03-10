import { alphabet } from '../constants/alphabet'
import { Rotors } from '../constants/rotors'

export type Rotor = {
  [key: number]: {
    char: string
    link: string
  }
}

export function createRotor(rotorSettings: string[], alphabet: string[]): Rotor {
  return rotorSettings.reduce((rotor, char, index) => {
    rotor[index] = {
      char: alphabet[index],
      link: alphabet.indexOf(char),
    }
    return rotor
  }, {})
}

export function createRotorEnchance(settings: string[]) {
  return createRotor(settings, alphabet)
}
