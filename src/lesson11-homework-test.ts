"use strict";

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

    expect(users.list).to.equal(data.users);
  });

  describe("getUsersNames method", () => {
    // + Написати метод що повератє масив імен усіх користувачів у форматі "John, Smith" ("firstName, lastName")

    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.getUsersNames).to.not.be.undefined;
    });

    it("should return list of user names", () => {
      const mockData = [
        { firstName: "Bob", lastName: "Smith" },
        { firstName: "Jack", lastName: "Chan" },
      ];
      const users = new Users(mockData as typeof data.users);
      expect(users.getUsersNames()).to.deep.equal(["Bob, Smith", "Jack, Chan"]);
    });

    it("should work for blank data", () => {
      const users = new Users([]);

      // + Виправити getUsersNames так, що цей юніт-тест проходив
      expect(users.getUsersNames()).to.deep.equal([]);
    });

    it("should work for real data", () => {
      const users = new Users(data.users);
      const mockData = data.users.map(item => {
        return `${item?.firstName}, ${item?.lastName}`;
      })

      // + Дописати цей юніт-тест, так щоб використовувалися data.users
      expect(users.getUsersNames()).to.deep.equal(mockData);
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

      const users = new Users(mockData as typeof data.users);
      users.updateUsersAge();
      const usersAges = users.list.map((user) => user.age);
      expect(usersAges).to.deep.equal([20, 30]);
    });

    it("should work for blank data", () => {
      const users = new Users([]);

      users.updateUsersAge();

      const usersAges = users.list.map((user) => user?.age);

      // + Виправити updateUsersAge так, що цей юніт-тест проходив
      expect(usersAges).to.deep.equal([]);
    });

    it("should work for real data", () => {
      const users = new Users([data.users[0]]);

      users.updateUsersAge();

      const usersAges = users.list.map((user) => user.age);
      // + Виправити updateUsersAge так, що цей юніт-тест проходив
      // _ Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 1, 2, 3 на правильні дані
      expect(usersAges).to.deep.equal([23]);
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

      const users = new Users(mockData as typeof data.users);

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
      const mockData: any[] = [
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

      const users = new Users(mockData);

      expect(users.getStatePostalCodes()).to.deep.equal([
        { name: "CO", postalCodes: ["80003", "80004"] },
        { name: "AK", postalCodes: ["10001"] },
      ]);
    });

    it("should work for real data", () => {
      const users = new Users(data.users);
      const mockData = [] as any[];
      users.list.forEach(item => {
        const matchedStateIndex = mockData.findIndex(matchState => matchState?.name === item?.address?.state);
        if (matchedStateIndex !== -1) {
          mockData[matchedStateIndex] = { name: mockData[matchedStateIndex].name, postalCodes: [...mockData[matchedStateIndex].postalCodes, item?.address?.postalCode] }
        } else {
          mockData.push({ name: item?.address?.state, postalCodes: [item?.address?.postalCode] })
        }
      });
      // + Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
      // + Дописати цей юніт-тест, так щоб використовувалися data.users - замінити XXX на правильні дані
      expect(users.getStatePostalCodes()).to.deep.equal(mockData);
    });
  });

  describe("getAverageWomenAge method", () => {
    // - Написати функцію що повератє середній вік всіх жінок ("gender": "female")

    it("should be defined", () => {
      const users = new Users(data.users);

      expect(users.getMediumWomenAge).to.not.be.undefined;
    });

    it("should work for real data", () => {
      const users = new Users(data.users);

      // + Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
      // + Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 12345 на правильні дані
      expect(users.getMediumWomenAge()).to.deep.equal(36);
    });
  });

  describe("getMostCommonWoomanHairColor", () => {
    it("should be defined", () => {
      const users = new Users(data.users);
      expect(users.getMostCommonWoomanHairColor).to.not.be.undefined;
    });

    it("should work for real data", () => {
      const users = new Users(data.users);
      const hairTypes: TTypes = {};
      let maxCount: number = 0;
      let value: string = '';
      const women: TList[] = users.list.filter(item => item.gender === 'female');
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
      expect(users.getMostCommonWoomanHairColor()).to.deep.equal(value);
    });
  });

  describe("getMostCommonManBlodType", () => {
    it("should be defined", () => {
      const users = new Users(data.users);
      expect(users.getMostCommonManBlodType).to.not.be.undefined;
    });

    it("should work for real data", () => {
      const users = new Users(data.users);
      const bloodTypes: TTypes = {};
      let maxCount: number = 0;
      let value: string = '';
      const men: TList[] = users.list.filter(item => item.gender === 'male');
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
      expect(users.getMostCommonManBlodType()).to.deep.equal(value);
    })
  })


  // Написати юніт-тести для наступних методів
  //+ getMostCommonWoomanHairColor - метод що повератє найбільш поширений колір волося серед жінок
  // + getMostCommonManBlodType - метод що повератє найбільш поширениу групу крові серед чоловіків
});
