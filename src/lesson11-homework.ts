type TDataElement = typeof data.users[0];
type PickData<T, K extends keyof T> = {
  [P in K]: T[P];
};
type TUserAge = Pick<TDataElement, 'firstName' | 'lastName' | 'age' | 'birthDate'>;
type TPostalStorage = {
  [key: string]: Set<string>;
}
type TPostalcode = {
  name:string;
  postalCodes:string[];
}
type TSomeTepe = {
  [key: string]: number;
}

class Users {
  // TODO: Add type for list property, remove `any` type annotation
  constructor(public list: TDataElement[]) {}

  // TODO: Write method that returns array of users names in format "John, Smith" ("firstName, lastName")
  // TODO: Need to fix code to use this.list property data
  getUsersNames():string[] {
    return this.list.map(el=>`${el.firstName}, ${el.lastName}`)
  }

  // TODO: Write method that updates users age to current date (2023 year)
  // TODO: Need to fix code to use this.list property data
  // TODO: Need to not mutate this.list property, but return new array of users with updated age
  updateUsersAge():TUserAge[] {
    const newData = JSON.parse(JSON.stringify(this.list)) as TDataElement[];
    const updated = newData.map(el=>{
      const years = new Date(new Date().getTime() - new Date(el.birthDate).getTime()).getFullYear() - 1970;
      el.age = years;
      return el
    })
    const returnData = updated.map(el=>({
        firstName: el.firstName,
        lastName: el.lastName,
        phone: el.phone,
        age: el.age,
        birthDate: el.birthDate,
    }));
    this.list = deepFreeze(updated);
    return returnData;
  }

  // TODO: Implement method that returns users from Ukraine (phone number +380)
  // TODO: Use this.list property data
  getUsersFromUkraine():(TUserAge & {phone:string})[]{
    const returnData = this.list.filter(el=>{
      const reg = /^[+]380.*/
      return reg.test(el.phone);
    }).map(el=>(
      {
          firstName: el.firstName,
          lastName: el.lastName,
          phone: el.phone,
          age: el.age,
          birthDate: el.birthDate,
      }
    ));
    return returnData;
  }

  // TODO: Implement method that returns postal codes grouped by state, using this.list user data
  getStatePostalCodes():TPostalcode[] {
    const codeStorage:TPostalStorage = {};
    const preparedData:TPostalcode[] = []
    for (const i of this.list){
      if(i.address){
        if(!codeStorage[i.address.state]){
          codeStorage[i.address.state] = new Set();
        }
        codeStorage[i.address.state].add(i.address.postalCode);
      }
      
      if(i.company){
        if(!codeStorage[i.company.address.state]){
          codeStorage[i.company.address.state] = new Set();
        }
        codeStorage[i.company.address.state].add(i.company.address.postalCode);
      }
    }
    for (const [key, value] of Object.entries(codeStorage)) {
      preparedData.push({
        name:key,
        postalCodes:[...value]
      })
    }
    return preparedData;
  }
  getMostCommonWoomanHairColor():string{
    const hairTypes:TSomeTepe={}
    this.list.filter(el=>el.gender === 'female').forEach(el=>{
      if(!hairTypes[el.hair.color]){
        hairTypes[el.hair.color]=0;
      }
      hairTypes[el.hair.color]=++hairTypes[el.hair.color];
    });
    const values = Object.values(hairTypes);
    if(values.length>0){
      const max = Math.max(...Object.values(hairTypes));
      return Object.keys(hairTypes).find(key => hairTypes[key] === max)!;
    }
    return '';
  }

  getMostCommonManBlodType():string{
    const bloodGroup:TSomeTepe={}
    this.list.filter(el=>el.gender === 'male').forEach(el=>{
      if(!bloodGroup[el.bloodGroup]){
        bloodGroup[el.bloodGroup]=0;
      }
      bloodGroup[el.bloodGroup]=++bloodGroup[el.bloodGroup];
    });
    const values = Object.values(bloodGroup)
    if(values.length>0){
      const max = Math.max(...values);
      return Object.keys(bloodGroup).find(key => bloodGroup[key] === max)!;
    }
    return '';
    
  }

  getAverageWomenAge():number{
    const womenAges:number[] = [];
    this.list.filter(el=>el.gender === 'female').forEach(el=>{
      womenAges.push(el.age);
    });
    if(womenAges.length>0){
      return womenAges.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/(womenAges.length || 1);
    }
    return 0;
    
  }
}
