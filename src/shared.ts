export type CipherDetail = {
  name: string,
  label: string,
  wiring: string[],
}

export function getCipherDetail(name: string, list: CipherDetail[]) {
  return list.find((rotor) => rotor.name === name)
}
