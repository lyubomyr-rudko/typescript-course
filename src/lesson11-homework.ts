type TDataElement = (typeof data.users)[0];
type TCommon = {
  [key: string]: number;
};
type TPostalCode = {
  [key: string]: string | string[];
};
class Users {
  // TODO: Add type for list property, remove `any` type annotation
  public list: TDataElement[];
  constructor(list: TDataElement[]) {
    this.list = structuredClone(list);
  }
  // TODO: Write method that returns array of users names in format "John, Smith" ("firstName, lastName")
  // TODO: Need to fix code to use this.list property data
  getUsersNames(): string[] {
    return this.list.map((item) => `${item.firstName}, ${item.lastName}`);
  }

  // TODO: Write method that updates users age to current date (2023 year)
  // TODO: Need to fix code to use this.list property data
  // TODO: Need to not mutate this.list property, but return new array of users with updated age
  updateUsersAge() {
    let now = new Date().getTime();
    this.list.forEach(
      (user) =>
        (user.age = Math.floor(
          (now - new Date(user.birthDate).getTime()) / (365 * 24 * 60 * 60 * 1000)
        ))
    );
  }

  // TODO: Implement method that returns users from Ukraine (phone number +380)
  // TODO: Use this.list property data
  getUsersFromUkraine() {
    return this.list.filter((user) => user.phone.startsWith("+380"));
  }

  // TODO: Implement method that returns postal codes grouped by state, using this.list user data
  getStatePostalCodes() {
    let postalCode: TPostalCode = {};
    for (let i = 0; i < this.list.length; i++) {
      let result = this.list[i].address;
      !postalCode[result.state]
        ? (postalCode[result.state] = [result.postalCode])
        : (postalCode[result.state] = [...postalCode[result.state], result.postalCode]);
    }
    return Object.keys(postalCode).map((name) => ({
      name,
      postalCodes: [...new Set(postalCode[name])],
    }));
  }
  getAverageWomenAge() {
    this.updateUsersAge();
    let fullAge = this.list.filter((obj) => obj.gender === "female").map((obj) => obj.age);
    return fullAge.reduce((a, b) => a + b, 0) / fullAge.length;
  }
  getMostCommonWoomanHairColor() {
    let hairColors = this.list
      .filter((obj) => obj.gender === "female")
      .map((obj) => obj.hair.color);
    let common: TCommon = {};
    hairColors.map((listItem) => (common[listItem] = common[listItem] ? common[listItem] + 1 : 1));
    const result = Object.entries(common).sort((a, b) => (a[1] > b[1] ? -1 : 1));
    return result[0][0];
  }
  getMostCommonManBlodType() {
    let bloodGroups = this.list.filter((obj) => obj.gender === "male").map((obj) => obj.bloodGroup);
    let common: TCommon = {};
    bloodGroups.map((listItem) => (common[listItem] = common[listItem] ? common[listItem] + 1 : 1));
    const result = Object.entries(common).sort((a, b) => (a[1] > b[1] ? -1 : 1));
    return result[0][0];
  }
}
