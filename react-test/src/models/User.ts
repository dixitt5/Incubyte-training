export class User {
  constructor (private readonly _name: string, private readonly _age: number) {
  }

  get name (): string {
    return this._name
  }

  get age (): number {
    return this._age
  }
}
