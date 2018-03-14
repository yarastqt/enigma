import { alphabet } from '../constants/alphabet'
import { Rotors, rotorsSettings } from '../constants/rotors'

export type Rotor = {
  [key: number]: {
    char: string
    link: string
  }
}

export function createRotorSettings(rotorSettings: string[], alphabet: string[]): Rotor {
  return rotorSettings.reduce((rotor, char, index) => {
    rotor[index] = {
      char: alphabet[index],
      link: alphabet.indexOf(char),
    }
    return rotor
  }, {})
}

export function createRotorSettingsEnchance(id: number) {
  if (rotorsSettings[id] === undefined) {
    throw new Error(`Undefined rotor id: ${id}`)
  }

  return createRotorSettings(rotorsSettings[id], alphabet)
}
