import { Rotor } from './utils/create-rotor-settings'

type RotorSetting = {
  rotor: number
  position: number
}

interface IEnigma {
  setRotors(settings: RotorSetting[]): void
  encode(): void
}

export class Enigma<R> implements IEnigma {
  private rotor1: Rotor
  private rotor2: Rotor
  private rotor3: Rotor

  public constructor(rotors) {
    // TODO: add reflector
    this.rotor1 = rotors[1]
    this.rotor2 = rotors[2]
    this.rotor3 = rotors[3]
    // this.setRotors()
  }

  /**
   * Set initial settings of rotors
   */
  public setRotors(settings?: RotorSetting[]) {
    
  }

  public encode() {
    // TODO: Add validate for settings rotors or add default settings for zero positions
  }
}
