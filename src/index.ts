import { CipherDetail, getCipherDetail } from './shared'
import { rotors } from './rotors'
import { reflectors } from './reflectors'


const configureMachine = (rotors: CipherDetail[], reflector: CipherDetail) => {}
const encrypt = (text: string, machine: any) => {}

const machine = configureMachine([
  getCipherDetail('I', rotors),
  getCipherDetail('II', rotors),
  getCipherDetail('III', rotors),
], getCipherDetail('UKW-B', reflectors))

const result = encrypt('hello', machine)
