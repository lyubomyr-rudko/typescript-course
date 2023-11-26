type TUser = typeof data.users[0]
type dictionary = {
  [key: string]: number
}
type TPostalCodeByState = {
  name: string
  postalCodes: string[]
}
type TPostalCodesArray = TPostalCodeByState[]
class Users {
  // TODO: Add type for list property, remove `any` type annotation
  constructor(public list: TUser[]) {}

  // TODO: Write method that returns array of users names in format "John, Smith" ("firstName, lastName")
  // TODO: Need to fix code to use this.list property data
  getUsersNames(): string[] {
    return this.list.map((user: TUser): string => `${user.firstName}, ${user.lastName}`)
  }

  // TODO: Write method that updates users age to current date (2023 year)
  // TODO: Need to fix code to use this.list property data
  // TODO: Need to not mutate this.list property, but return new array of users with updated age
  updateUsersAge() {
    const currentYear: number = new Date().getFullYear()
    this.list =  this.list.map((user) => {
      const yearOfBirth: number = new Date(user.birthDate).getFullYear()
      return {
        ...user,
        age: currentYear - yearOfBirth
      }
    })
    console.log(this.list.map((user) => user.age))
    return this.list
  }

  // TODO: Implement method that returns users from Ukraine (phone number +380)
  // TODO: Use this.list property data
  getUsersFromUkraine(): TUser[] {
    const phoneRegExp = /^[+]380.*/
    return this.list.filter((user: TUser) => phoneRegExp.test(user.phone))
  }

  // TODO: Implement method that returns postal codes grouped by state, using this.list user data
  getStatePostalCodes(): TPostalCodesArray {
    type TTempStorage = {
      [key: string]: string[]
    }
    const tempStorage: TTempStorage = this.list.reduce((acc: TTempStorage, currentValue) => {
      acc[currentValue.address.state] = []
      return acc
    }, {})
    for (const listElement of this.list) {
      if (listElement.address.state in tempStorage) {
        tempStorage[listElement.address.state].push(listElement.address.postalCode)
      }
      if (listElement?.company?.address.state in tempStorage) {
        tempStorage[listElement.company.address.state].push(listElement.company.address.postalCode)
      }
    }
    return Object.entries(tempStorage).map((item: [string, string[]]): TPostalCodeByState => ({
      name: item[0],
      postalCodes: [...new Set(item[1])]
    }))
  }

  getAverageWomenAge(): number {
    const arrayOfWomen: TUser[] = this.list.filter((user: TUser) => user.gender === 'female')
    return +(arrayOfWomen.reduce((acc: number, currentValue: TUser) => acc + currentValue.age, 0) / arrayOfWomen.length).toFixed(2)
  }

  getMostCommonWomenHairColor(): string[] | string {
    const arrayOfWomen: TUser[] = this.list.filter((user: TUser) => user.gender === 'female')
    const hairColorDictionary: dictionary = arrayOfWomen.reduce((acc: dictionary, currentValue: TUser) => {
      if (!currentValue.hair || !currentValue.hair.color) {
        return acc
      } else {
        acc[currentValue.hair.color] = (acc[currentValue.hair.color] || 0) + 1
        return acc
      }
    }, {})
    const maxValue: number = Math.max(...Object.values(hairColorDictionary))
    return Object.keys(hairColorDictionary).filter((key) => hairColorDictionary[key] === maxValue)
  }

  getMostCommonManBloodType(): string[] {
    const arrayOfMen: TUser[] = this.list.filter((user: TUser) => user.gender === 'male')
    const menBloodTypeDictionary: dictionary = arrayOfMen.reduce((acc: dictionary, currentValue: TUser) => {
      acc[currentValue.bloodGroup] = (acc[currentValue.bloodGroup] || 0) + 1
      return acc
    }, {})
    const maxValue: number = Math.max(...Object.values(menBloodTypeDictionary))
    return Object.keys(menBloodTypeDictionary).filter((key: string) => menBloodTypeDictionary[key] === maxValue)
  }
}
