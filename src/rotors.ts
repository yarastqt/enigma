export type Rotor = {
  name: string,
  label: string,
  wiring: string[],
}

export const rotors: Rotor[] = [
  {
    name: 'I',
    label: 'I',
    wiring: [
      'e', 'k', 'm', 'f', 'l', 'g', 'd', 'q', 'v',
      'z', 'n', 't', 'o', 'w', 'y', 'h', 'x', 'u',
      's', 'p', 'a', 'i', 'b', 'r', 'c', 'j',
    ],
  },
  {
    name: 'II',
    label: 'II',
    wiring: [
      'a', 'j', 'd', 'k', 's', 'i', 'r', 'u', 'x',
      'b', 'l', 'h', 'w', 't', 'm', 'c', 'q', 'g',
      'z', 'n', 'p', 'y', 'f', 'v', 'o', 'e',
    ],
  },
  {
    name: 'III',
    label: 'III',
    wiring: [
      'b', 'd', 'f', 'h', 'j', 'l', 'c', 'p', 'r',
      't', 'x', 'v', 'z', 'n', 'y', 'e', 'i', 'w',
      'g', 'a', 'k', 'm', 'u', 's', 'q', 'o',
    ],
  },
]

export const getRotorByName = (name: string, rotors: Rotor[]) => {
  return rotors.find((rotor) => rotor.name === name)
}
