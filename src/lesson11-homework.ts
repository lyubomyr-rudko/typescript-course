type TList = typeof data.users[0];
type TAge = Pick<TList, 'firstName' | 'lastName' | 'age' | 'birthDate'>
type TStatePostalCodes = {
  name: string;
  postalCodes: string[]
}
type TTypes = {
  [key: string]: number;
}
class Users {
  // TODO: + Add type for list property, remove `any` type annotation

  constructor(public list: TList[]) { }

  // +TODO: Write method that returns array of users names in format "John, Smith" ("firstName, lastName")
  // +TODO: Need to fix code to use this.list property data
  getUsersNames(): string[] {
    const result = this.list.map(item => `${item?.firstName}, ${item?.lastName}`);
    return result;
  }

  // TODO: + Write method that updates users age to current date (2023 year)
  // TODO: + Need to fix code to use this.list property data
  // TODO: + Need to not mutate this.list property, but return new array of users with updated age
  convertDate(date: string): number {
    const dateObj = new Date(date);
    return dateObj.getFullYear()
  }

  updateUsersAge(): TAge[] {
    const newData = JSON.parse(JSON.stringify(this.list)) as TList[];

    const result = newData.map(item => {
      const correctAge = new Date().getFullYear() - new Date(item?.birthDate).getFullYear();
      item.age = correctAge;
      return item;
    });
    this.list = result;
    return result;
  }

  // TODO: Implement method that returns users from Ukraine (phone number +380)
  // TODO: Use this.list property data
  getUsersFromUkraine(): TList[] {
    const result: TList[] = [];
    this.list.forEach(item => {
      if (item.phone?.includes('+380')) result.push(item);
    });
    return result;
  }

  // TODO: Implement method that returns postal codes grouped by state, using this.list user data
  getStatePostalCodes(): TStatePostalCodes[] {
    const result: TStatePostalCodes[] = [];

    this.list.forEach(item => {
      const matchedStateIndex = result.findIndex(matchState => matchState?.name === item?.address?.state);
      if (matchedStateIndex !== -1) {
        result[matchedStateIndex] = { name: result[matchedStateIndex].name, postalCodes: [...result[matchedStateIndex].postalCodes, item?.address?.postalCode] }
      } else {
        result.push({ name: item?.address?.state, postalCodes: [item?.address?.postalCode] })
      }
    });
    return result;
  };

  getMediumWomenAge(): number {
    const women: TList[] = this.list.filter(item => item.gender === 'female');
    if (women.length > 0) {
      const averageAge = women.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0) / (women.length);
      return Math.round(averageAge);
    }
    return 0;
  };

  getMostCommonWoomanHairColor(): string {
    const hairTypes: TTypes = {};
    let maxCount: number = 0;
    let value: string = '';
    const women: TList[] = this.list.filter(item => item.gender === 'female');
    women.forEach(woman => {
      if (!hairTypes[woman?.hair?.color]) hairTypes[woman?.hair?.color] = 0;
      hairTypes[woman?.hair?.color] = hairTypes[woman?.hair?.color] + 1;
    });

    for (let key in hairTypes) {
      if (hairTypes[key] > maxCount) {
        maxCount = hairTypes[key];
        value = key;
      }
    }
    return value;
  };

  getMostCommonManBlodType(): string {
    const bloodTypes: TTypes = {};
    let maxCount: number = 0;
    let value: string = '';
    const men: TList[] = this.list.filter(item => item.gender === 'male');
    men.forEach(man => {
      if (!bloodTypes[man?.hair?.color]) bloodTypes[man?.hair?.color] = 0;
      bloodTypes[man?.hair?.color] = bloodTypes[man?.hair?.color] + 1;
    });

    for (let key in bloodTypes) {
      if (bloodTypes[key] > maxCount) {
        maxCount = bloodTypes[key];
        value = key;
      }
    }
    return value;
  }
}
