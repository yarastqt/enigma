import { createRotorSettingsEnchance } from './utils/create-rotor-settings'

interface IRotor {
  id: number
  turnover: number
  position: number
  rotate(): void
  setPosition(position: number): number
}

export class Rotor implements IRotor {
  public id: number = null
  public turnover: number = 0
  public position: number = 0

  private settings: any

  public constructor({ id, position }: Partial<IRotor>) {
    this.id = id
    this.position = position
    // TODO: maybe settings provide from outside
    this.settings = createRotorSettingsEnchance(id)
  }

  public rotate() {}

  public setPosition(position: number) {
    // TODO: add validate for position - cannot be set out of range
    this.position = position
    return position
  }
}
