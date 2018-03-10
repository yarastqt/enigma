import { Rotor } from './utils/create-rotor'

interface IEnigma {
  setRotors(): void
  encode(): void
}

export class Enigma<R> implements IEnigma {
  private rotor1: Rotor
  private rotor2: Rotor
  private rotor3: Rotor

  constructor(rotors: R) {
    this.rotor1 = rotors[1]
    this.rotor2 = rotors[2]
    this.rotor3 = rotors[3]
  }

  public setRotors() {

  }

  public encode() {
    // TODO: Add validate for settings rotors or add default settings for zero positions
  }
}
