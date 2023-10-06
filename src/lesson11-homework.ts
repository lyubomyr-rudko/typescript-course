type TSimplifiedUser = {
  firstName:string,
  lastName?:string,
  age?:number,
  birthDate?:string,
  phone?:string,
  gender?:string
  hair?: {
    color: string,
    type: string,
  },
  address?: {
    postalCode: string,
    state: string,
  },
  bloodGroup?:string
}

type TSimplifiedAddress = {
  name:string,
  postalCodes:string[]
}

type TEntityCounterDictionary = {
  [key:string]:number
}

function getMostCommonEntity(entityCounter:TEntityCounterDictionary){
  let highestNumber:number = 0
  let resultedEntity:string = ""

  for (const key in entityCounter) {
    if(highestNumber < entityCounter[key]){
      highestNumber = entityCounter[key]
      resultedEntity = key
    }
  }

  return resultedEntity
}
// function userNameAndSurname(usersArray:TFirstAndLastName[]){
//   return usersArray.map((user:TFirstAndLastName)=>{
//     return `${user.firstName}, ${user.lastName}`
//   })
// }

class Users {
  // TODO: Add type for list property, remove `any` type annotation
  constructor(public list: TSimplifiedUser[]) {}

  // TODO: Write method that returns array of users names in format "John, Smith" ("firstName, lastName")
  // TODO: Need to fix code to use this.list property data
  getUsersNames() {
    return this.list.map((user:TSimplifiedUser)=>{
      return `${user.firstName}, ${user.lastName}`
    })
  }

  // TODO: Write method that updates users age to current date (2023 year)
  // TODO: Need to fix code to use this.list property data
  // TODO: Need to not mutate this.list property, but return new array of users with updated age
  updateUsersAge() {
    return this.list.map((user:TSimplifiedUser)=>{
      const userCopy = {...user}

      if(userCopy.birthDate && userCopy.age){
        let userBirthDate = new Date(userCopy.birthDate)
        let currentDate = new Date()
    
        userCopy.age = currentDate.getFullYear() - userBirthDate.getFullYear()
      }

      return userCopy
    })
  }

  // TODO: Implement method that returns users from Ukraine (phone number +380)
  // TODO: Use this.list property data
  getUsersFromUkraine() {
    return this.list.filter((user)=>{
      if(user.phone){
        const phoneNumbers = user.phone.match(/\d/g)?.join('')
        if(phoneNumbers?.startsWith("380")){
          return user
        }
      }
    })
  }

  // TODO: Implement method that returns postal codes grouped by state, using this.list user data
  getStatePostalCodes():TSimplifiedAddress[] {
    const postalCodeUsers = this.list.filter((user)=>user.address?.postalCode && user.address.state)

    const result:TSimplifiedAddress[] = []

    for(const user of postalCodeUsers){
      if(user.address){
        const {state, postalCode} = user.address
        const targetAddressIndex:number = result.findIndex((customAddress:TSimplifiedAddress)=>customAddress.name === state)

        if(targetAddressIndex!==-1){
          result[targetAddressIndex].postalCodes.push(postalCode)
        } else{
          const newCustomAddress:TSimplifiedAddress = {name:state, postalCodes:[postalCode]}
          result.push(newCustomAddress)
        }
      }
    }

    return result
  }

  getAverageWomenAge(){
    const womenArray = this.list.filter((user)=>{
      if(user.gender === "female" && user.age){
        return user
      }
    })
    
    const sumOfAllAges = womenArray.reduce((accumulator, woman)=>{
      if(woman.age){
        return accumulator + woman.age
      }

      return accumulator
    }, 0)

    return Math.floor(sumOfAllAges/womenArray.length)
  }

  getMostCommonWomanHairColor(){
    const womenArray = this.list
      .filter((user)=>user.gender === "female" && user.hair?.color)

    const womenHairDictionary:TEntityCounterDictionary = {}

    for(let i = 0; i<womenArray.length; i++){
      const temporaryWomanCopy:TSimplifiedUser = {...womenArray[i]}
      
      if(temporaryWomanCopy.hair !== undefined){
        if(!womenHairDictionary[temporaryWomanCopy.hair.color]){
          womenHairDictionary[temporaryWomanCopy.hair.color] = 1
        } else{
          womenHairDictionary[temporaryWomanCopy.hair.color]++
        }
      }
    }

    return getMostCommonEntity(womenHairDictionary)
  }


  getMostCommonManBloodType(){
     const menArray = this.list
      .filter((user)=>user.gender === "male" && user.bloodGroup)

    const menHairDictionary:TEntityCounterDictionary = {}

    for(let i = 0; i<menArray.length; i++){
      const temporaryManCopy:TSimplifiedUser = {...menArray[i]}
      
      if(temporaryManCopy.bloodGroup !== undefined){
        if(!menHairDictionary[temporaryManCopy.bloodGroup]){
          menHairDictionary[temporaryManCopy.bloodGroup] = 1
        } else{
          menHairDictionary[temporaryManCopy.bloodGroup]++
        }
      }
    }

    return getMostCommonEntity(menHairDictionary)
  }
}

