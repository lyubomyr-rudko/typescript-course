"use strict";

declare const chai: any;
declare const describe: any;
declare const it: any;
declare const xit: any;

describe("Users class", () => {
  const { expect } = chai;

  

  it("should be defined", () => {
    expect(Users).to.not.be.undefined;
    //expect(1).equal(1);
  });

  it("should define constructor that accepts users list", () => {
    const users = new Users(data.users);

    expect(users.list).to.equal(data.users);
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

      const users = new Users(mockData as typeof data.users);

      expect(users.getUsersNames()).to.deep.equal(["Bob, Smith", "Jack, Chan"]);
    });

    it("should work for blank data", () => {
      const users = new Users([]);

      // - Виправити getUsersNames так, що цей юніт-тест проходив
      expect(users.getUsersNames()).to.deep.equal([]);
    });

    it("should work for real data", () => {
      const users = new Users(data.users.slice(0,2));

      // - Дописати цей юніт-тест, так щоб використовувалися data.users
      expect(users.getUsersNames()).to.deep.equal(["Terry, Medhurst", "Sheldon, Quigley"]);
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

      const usersAges = users.list.map((user) => user.age);

      // - Виправити updateUsersAge так, що цей юніт-тест проходив
      expect(usersAges).to.deep.equal([]);
    });

    it("should work for real data", () => {
      const users = new Users([data.users[0]]);

      users.updateUsersAge();

      const usersAges = users.list.map((user) => user.age);

      // - Виправити updateUsersAge так, що цей юніт-тест проходив
      // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 1, 2, 3 на правильні дані
      expect(usersAges).to.deep.equal([22]);
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
        { firstName: "Bob", lastName: "Smith", phone: "+7 813 117 7139", age: 10, birthDate: '2020-01-01'},
        { firstName: "Jack", lastName: "Chan", phone: "+7 813 117 7139", age: 10, birthDate: '2020-01-01'},
        { firstName: "Ove", lastName: "Malyk", phone: "+3809525426549", age: 10, birthDate: '2020-01-01' },
        { firstName: "Myk", lastName: "Franko", phone: "+3809625426549", age: 10, birthDate: '2020-01-01'},
      ];

      const users = new Users(mockData as typeof data.users);

      const usersNamesAndPhones = users
        .getUsersFromUkraine()
        .map(({ firstName, lastName, phone}) => ({
          firstName,
          lastName,
          phone
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

      const users = new Users(mockData as typeof data.users);

      expect(users.getStatePostalCodes()).to.deep.equal([
        { name: "CO", postalCodes: ["80003", "80004"] },
        { name: "AK", postalCodes: ["10001"] },
      ]);
    });

    it("should work for real data", () => {
      const users = new Users([data.users[0]]);

      // - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
      // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити XXX на правильні дані
      expect(users.getStatePostalCodes()).to.deep.equal([
        { name: "DC", postalCodes: ["20020"] },
        { name: "TN", postalCodes: ["37076"] },
        // ... Це місце де має бути ваш код
      ]);
    });
  });

  describe("getAverageWomenAge method", () => {
    // - Написати функцію що повератє середній вік всіх жінок ("gender": "female")

    it("should be defined", () => {
      const users = new Users(data.users);
      expect(users.getAverageWomenAge).to.not.be.undefined;
    });

    it("should work with mock data", () => {
      const mockData = [
        {
          gender: "female",
          age:10
        },
        {
          gender: "male",
          age:10
        },
        {
          gender: "female",
          age:10
        },
      ];
      const users = new Users(mockData  as typeof data.users);
      expect(users.getAverageWomenAge()).to.deep.equal(10);
    });

    it("should work for real data", () => {
      const preparedData = data.users.filter(el=>(el.id===1 || el.id === 6 || el.id ===7))
      const users = new Users(preparedData);
      expect(users.getAverageWomenAge()).to.deep.equal(26);
    });
  });
  describe("getMostCommonWoomanHairColor method", () => {

    it("should be defined", () => {
      const users = new Users(data.users);
      expect(users.getMostCommonWoomanHairColor).to.not.be.undefined;
    });

    it("should work with mock data", () => {
      const mockData = [
        {
          gender: "female",
          hair: {
            color: "Black",
            type: "Strands",
          },
        },
        {
          gender: "female",
          hair: {
            color: "Blue",
            type: "Strands",
          },
        },
        {
          gender: "female",
          hair: {
            color: "Black",
            type: "Strands",
          },
        },
        {
          gender: "male",
          hair: {
            color: "Black",
            type: "Strands",
          },
        },
      ];
      const users = new Users(mockData  as typeof data.users);
      expect(users.getMostCommonWoomanHairColor()).to.deep.equal('Black');
    });
    it("should work with mock data when females don't exist", () => {
      const mockData = [
        {
          gender: "male",
          hair: {
            color: "Black",
            type: "Strands",
          },
        },
        {
          gender: "male",
          hair: {
            color: "Blue",
            type: "Strands",
          },
        },
        {
          gender: "male",
          hair: {
            color: "Black",
            type: "Strands",
          },
        },
        {
          gender: "male",
          hair: {
            color: "Black",
            type: "Strands",
          },
        },
      ];
      const users = new Users(mockData  as typeof data.users);
      expect(users.getMostCommonWoomanHairColor()).to.deep.equal('');
    });

    it("should work for real data", () => {
      const preparedData = data.users.filter(el=>(el.id===1 || el.id === 6 || el.id ===7 || el.id === 10))
      const users = new Users(preparedData);
      expect(users.getMostCommonWoomanHairColor()).to.deep.equal('Chestnut');
    });
  });

  describe("getMostCommonManBlodType method", () => {
    it("should be defined", () => {
      const users = new Users(data.users);
      expect(users.getMostCommonManBlodType).to.not.be.undefined;
    });

    it("should work with mock data", () => {
      const mockData = [
        {
          gender: "female",
          bloodGroup: "B−",
        },
        {
          gender: "male",
          bloodGroup: "B−",
        },
        {
          gender: "male",
          bloodGroup: "A−",
        },
        {
          gender: "male",
          bloodGroup: "A−",
        },
      ];
      const users = new Users(mockData  as typeof data.users);
      expect(users.getMostCommonManBlodType()).to.equal('A−');
    });
    it("should work with mock data when  male don't exist", () => {
      const mockData = [
        {
          gender: "female",
          bloodGroup: "B−",
        },
        {
          gender: "female",
          bloodGroup: "B−",
        },
        {
          gender: "female",
          bloodGroup: "A−",
        },
        {
          gender: "female",
          bloodGroup: "A−",
        },
      ];
      const users = new Users(mockData  as typeof data.users);
      expect(users.getMostCommonManBlodType()).to.equal('');
    });

    it("should work for real data", () => {
      const preparedData = data.users.filter(el=>(el.id===1 || el.id === 2 || el.id ===3 || el.id === 10))
      const users = new Users(preparedData);
      expect(users.getMostCommonManBlodType()).to.equal('A−');
    });
  });


  // Написати юніт-тести для наступних методів
  // getMostCommonWoomanHairColor - метод що повератє найбільш поширений колір волося серед жінок
  // getMostCommonManBlodType - метод що повератє найбільш поширениу групу крові серед чоловіків
});
