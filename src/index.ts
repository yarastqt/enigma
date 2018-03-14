import { Alphabet, alphabet } from './constants/alphabet'
import { rotorsSettings } from './constants/rotors'
import { Enigma } from './enigma'
import { Rotor } from './rotor'

// TODO: add type
const rotors = [
  new Rotor({ id: 1, position: 25 }),
  new Rotor({ id: 2, position: 0 }),
  new Rotor({ id: 3, position: 0 }),
]
const machine = new Enigma(
  rotors
)
