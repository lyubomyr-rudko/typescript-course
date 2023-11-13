"use strict";

// import { Users } from "./lesson11-homework";
// import { data } from "./users-data";

declare const chai: any;
declare const describe: any;
declare const it: any;
declare const xit: any;

describe("Users class", () => {
  const { expect } = chai;

  it("should be defined", () => {
    expect(Users).to.not.be.undefined;
  });

  it("should define constructor that accepts users list", () => {
    const users = new Users(data.users);

    expect(users.list).to.deep.equal(data.users);
  });
  describe("getUsersNames method", () => {
    // - Написати метод що повератє масив імен усіх користувачів у форматі "John, Smith" ("firstName, lastName")

    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.getUsersNames).to.not.be.undefined;
    });

    it("should return list of user names", () => {
      const mockData = [
        { firstName: "Bob", lastName: "Smith" },
        { firstName: "Jack", lastName: "Chan" },
      ];

      const users = new Users(mockData as any);

      expect(users.getUsersNames()).to.deep.equal(["Bob, Smith", "Jack, Chan"]);
    });

    it("should work for blank data", () => {
      const users = new Users([]);

      // - Виправити getUsersNames так, що цей юніт-тест проходив
      expect(users.getUsersNames()).to.deep.equal([]);
    });

    it("should work for real data", () => {
      const users = new Users(data.users);

      // - Дописати цей юніт-тест, так щоб використовувалися data.users
      expect(users.getUsersNames()).to.deep.equal([
        "Terry, Medhurst",
        "Sheldon, Quigley",
        "Terrill, Hills",
        "Miles, Cummerata",
        "Mavis, Schultz",
        "Alison, Reichert",
        "Oleta, Abbott",
        "Ewell, Mueller",
        "Demetrius, Corkery",
        "Eleanora, Price",
        "Marcel, Jones",
        "Assunta, Rath",
        "Trace, Douglas",
        "Enoch, Lynch",
        "Jeanne, Halvorson",
        "Trycia, Fadel",
        "Bradford, Prohaska",
        "Arely, Skiles",
        "Gust, Purdy",
        "Lenna, Renner",
        "Doyle, Ernser",
        "Tressa, Weber",
        "Felicity, O'Reilly",
        "Jocelyn, Schuster",
        "Edwina, Ernser",
        "Griffin, Braun",
        "Piper, Schowalter",
        "Kody, Terry",
        "Macy, Greenfelder",
        "Maurine, Stracke",
      ]);
    });
  });

  describe("updateUsersAge method", () => {
    // - Написати метод що виправляє вік користувачів, апдейтить дані користувачів правильним віком (age) на поточну дату, 2023 рік (використати день народження birthDate для обчислення віку)

    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.updateUsersAge).to.not.be.undefined;
    });

    it("should update users age", () => {
      const mockData = [
        {
          firstName: "Bob",
          lastName: "Smith",
          age: 18,
          birthDate: "2003-02-13",
        },
        {
          firstName: "Jack",
          lastName: "Chan",
          age: 28,
          birthDate: "1993-02-13",
        },
      ];

      const users = new Users(mockData as any);

      users.updateUsersAge();

      const usersAges = users.list.map((user) => user.age);

      expect(usersAges).to.deep.equal([20, 30]);
    });

    it("should work for blank data", () => {
      const users = new Users([]);

      users.updateUsersAge();

      const usersAges = users.list.map((user) => user.age);

      // - Виправити updateUsersAge так, що цей юніт-тест проходив
      expect(usersAges).to.deep.equal([]);
    });

    it("should work for real data", () => {
      const users = new Users(data.users);
      users.updateUsersAge();
      const usersAges = users.list.map((user) => user.age);
      expect(usersAges).to.deep.equal([
        22, 20, 30, 54, 54, 54, 41, 59, 52, 65, 62, 32, 56, 44, 27, 60, 47, 65, 33, 43, 40, 35, 56,
        57, 23, 58, 40, 44, 47, 58,
      ]);
    });
  });

  describe("getUsersFromUkraine method", () => {
    // - Написати функцію що повератє список користувачів з України (номер телефону +380).

    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.getUsersFromUkraine).to.not.be.undefined;
    });

    it("should return list of users from Ukraine", () => {
      const mockData = [
        { firstName: "Bob", lastName: "Smith", phone: "+7 813 117 7139" },
        { firstName: "Jack", lastName: "Chan", phone: "+7 813 117 7139" },
        { firstName: "Ove", lastName: "Malyk", phone: "+3809525426549" },
        { firstName: "Myk", lastName: "Franko", phone: "+3809625426549" },
      ];

      const users = new Users(mockData as any);

      const usersNamesAndPhones = users
        .getUsersFromUkraine()
        .map(({ firstName, lastName, phone }) => ({
          firstName,
          lastName,
          phone,
        }));

      expect(usersNamesAndPhones.length).to.equal(2);

      expect(usersNamesAndPhones).to.deep.include({
        firstName: "Myk",
        lastName: "Franko",
        phone: "+3809625426549",
      });

      expect(usersNamesAndPhones).to.deep.include({
        firstName: "Ove",
        lastName: "Malyk",
        phone: "+3809525426549",
      });
    });

    it("should work for real data", () => {
      const users = new Users(data.users);

      const usersNamesAndPhones = users
        .getUsersFromUkraine()
        .map(({ firstName, lastName, phone }) => ({
          firstName,
          lastName,
          phone,
        }));

      expect(usersNamesAndPhones.length).to.equal(1);

      // - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
      expect(usersNamesAndPhones).to.deep.include({
        firstName: "Assunta",
        lastName: "Rath",
        phone: "+380 962 542 6549",
      });
    });
  });

  describe("getStatePostalCodes method", () => {
    // - Написати функцію що на основі даних усіх користувачів повератє масив штатів і їх поштових індексів у вигляді масиву обєктів [{"name": "AK", "postalCodes": ["99503", "..."]}]. Штати не повинні повторюватися.

    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.getStatePostalCodes).to.not.be.undefined;
    });

    it("should return list of postal codes for all states", () => {
      const mockData = [
        {
          firstName: "Joe",
          address: {
            postalCode: "80003",
            state: "CO",
          },
        },
        {
          firstName: "Bob",
          address: {
            postalCode: "80004",
            state: "CO",
          },
        },
        {
          firstName: "Mike",
          address: {
            postalCode: "10001",
            state: "AK",
          },
        },
      ];

      const users = new Users(mockData as any);

      expect(users.getStatePostalCodes()).to.deep.equal([
        { name: "CO", postalCodes: ["80003", "80004"] },
        { name: "AK", postalCodes: ["10001"] },
      ]);
    });

    it("should work for real data", () => {
      const users = new Users(data.users);

      // - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
      // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити XXX на правильні дані
      expect(users.getStatePostalCodes()).to.deep.equal([
        { name: "DC", postalCodes: ["20020", "20001"] },
        { name: "KY", postalCodes: ["40219", "40206", "40208"] },
        { name: "CA", postalCodes: ["95945", "94591", "93908", "93645"] },
        { name: "CT", postalCodes: ["06040", "06042"] },
        { name: "VT", postalCodes: ["05452", "05037"] },
        { name: "AZ", postalCodes: ["85306", "85305"] },
        {
          name: "TN",
          postalCodes: ["37209", "37206", "37076", "37211", "37013"],
        },
        { name: "CO", postalCodes: ["80003"] },
        { name: "MA", postalCodes: ["02664"] },
        { name: "AR", postalCodes: ["72704", "72703"] },
        { name: "AL", postalCodes: ["36108", "36111"] },
        { name: "GA", postalCodes: ["31415"] },
        { name: "AK", postalCodes: ["99503"] },
      ]);
    });
  });

  describe("getAverageWomenAge method", () => {
    // - Написати функцію що повератє середній вік всіх жінок ("gender": "female")

    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.getAverageWomenAge).to.not.be.undefined;
    });

    it("should work for real data", () => {
      const users = new Users(data.users);

      // - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
      // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 12345 на правильні дані
      expect(users.getAverageWomenAge()).to.deep.equal(44.69230769230769);
    });
  });

  // Написати юніт-тести для наступних методів
  describe("getMostCommonWoomanHairColor", () => {
    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.getMostCommonWoomanHairColor).to.not.be.undefined;
    });
    it("should return most common color of woman hair", () => {
      const mockData = [
        {
          firstName: "Joe",
          gender: "female",
          hair: {
            color: "Blond",
            type: "Strands",
          },
        },
        {
          firstName: "Bob",
          gender: "female",
          hair: {
            color: "Blond",
            type: "Strands",
          },
        },
        {
          firstName: "Mike",
          gender: "female",
          hair: {
            color: "Blond",
            type: "Strands",
          },
        },
        {
          firstName: "Oleh",
          gender: "female",
          hair: {
            color: "Black",
            type: "Strands",
          },
        },
        {
          firstName: "Pocidlo",
          gender: "female",
          hair: {
            color: "Bold",
            type: "Strands",
          },
        },
      ];

      const users = new Users(mockData as any);

      expect(users.getMostCommonWoomanHairColor()).to.deep.equal("Blond");
    });
    it("should work for real data", () => {
      const users = new Users(data.users);
      expect(users.getMostCommonWoomanHairColor()).to.deep.equal("Black");
    });
  });
  describe("getMostCommonManBlodType", () => {
    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.getMostCommonManBlodType).to.not.be.undefined;
    });
    it("should return most common blood type of man", () => {
      const mockData = [
        {
          firstName: "Joe",
          gender: "male",
          bloodGroup: "A−",
        },
        {
          firstName: "Bob",
          gender: "male",
          bloodGroup: "A−",
        },
        {
          firstName: "Mike",
          gender: "male",
          bloodGroup: "A+",
        },
        {
          firstName: "Oleh",
          gender: "male",
          bloodGroup: "B−",
        },
        {
          firstName: "Pocidlo",
          gender: "male",
          bloodGroup: "B+",
        },
        {
          firstName: "Pocidlo2",
          gender: "female",
          bloodGroup: "C+",
        },
      ];

      const users = new Users(mockData as any);

      expect(users.getMostCommonManBlodType()).to.deep.equal("A−");
    });
    it("should work for real data", () => {
      const users = new Users(data.users);
      expect(users.getMostCommonManBlodType()).to.deep.equal("O+");
    });
  });
});
