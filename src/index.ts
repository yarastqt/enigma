import { Rotor, createRotorEnchance } from './utils/create-rotor'
import { Alphabet, alphabet } from './constants/alphabet'
import { rotorsSettings } from './constants/rotors'
import { Enigma } from './enigma'

type Rotors = {
  [key: number]: Rotor
}

const rotors: Rotors = {
  1: createRotorEnchance(rotorsSettings[1]),
  2: createRotorEnchance(rotorsSettings[2]),
  3: createRotorEnchance(rotorsSettings[3]),
}
const machine = new Enigma<Rotors>(
  rotors
)

