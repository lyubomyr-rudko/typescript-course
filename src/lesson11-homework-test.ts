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

      const users = new Users(mockData);

      expect(users.getUsersNames()).to.deep.equal(["Bob, Smith", "Jack, Chan"]);
    });

    it("should work for blank data", () => {
      const users = new Users([]);

      // - Виправити getUsersNames так, що цей юніт-тест проходив
      expect(users.getUsersNames()).to.deep.equal([]);
    });

    it("should work for real data", () => {
      const users = new Users(data.users);
      const realData = data.users.map((user)=>{
        return `${user.firstName}, ${user.lastName}`
      })
      // - Дописати цей юніт-тест, так щоб використовувалися data.users
      expect(users.getUsersNames()).to.deep.equal(realData);
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

      const users = new Users(mockData);
      const usersAges = users.updateUsersAge().map((user) => user.age);

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
      const usersAges = users.updateUsersAge().map((user) => user.age);

      // - Виправити updateUsersAge так, що цей юніт-тест проходив
      // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 1, 2, 3 на правильні дані

      const mockedRealData = data.users.map((user:TSimplifiedUser)=>{
        const userCopy = {...user}
      
        if(userCopy.birthDate && userCopy.age){
          let userBirthDate = new Date(userCopy.birthDate)
          let currentDate = new Date()
      
          userCopy.age = currentDate.getFullYear() - userBirthDate.getFullYear()
        }
      
        return userCopy
      }).map((user)=>user.age)

      expect(usersAges).to.deep.equal(mockedRealData);
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

      const users = new Users(mockData);

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

      const users = new Users(mockData);

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
        {
            "name": "DC",
            "postalCodes": [
                "20020",
                "20001"
            ]
        },
        {
            "name": "KY",
            "postalCodes": [
                "40219",
                "40206",
                "40208"
            ]
        },
        {
            "name": "CA",
            "postalCodes": [
                "95945",
                "94591",
                "93908",
                "93645"
            ]
        },
        {
            "name": "CT",
            "postalCodes": [
                "06040",
                "06040",
                "06042"
            ]
        },
        {
            "name": "VT",
            "postalCodes": [
                "05452",
                "05037"
            ]
        },
        {
            "name": "AZ",
            "postalCodes": [
                "85306",
                "85305"
            ]
        },
        {
            "name": "TN",
            "postalCodes": [
                "37209",
                "37206",
                "37076",
                "37211",
                "37013"
            ]
        },
        {
            "name": "CO",
            "postalCodes": [
                "80003"
            ]
        },
        {
            "name": "MA",
            "postalCodes": [
                "02664"
            ]
        },
        {
            "name": "AR",
            "postalCodes": [
                "72704",
                "72704",
                "72703"
            ]
        },
        {
            "name": "AL",
            "postalCodes": [
                "36108",
                "36111"
            ]
        },
        {
            "name": "GA",
            "postalCodes": [
                "31415"
            ]
        },
        {
            "name": "AK",
            "postalCodes": [
                "99503"
            ]
        }
      ]);
    });
  });

  describe("getAverageWomenAge method", () => {
    // - Написати функцію що повератє середній вік всіх жінок ("gender": "female")

    it("should be defined", () => {
      const users = new Users(data.users);
      users.getAverageWomenAge()
      expect(users.getAverageWomenAge()).to.not.be.undefined;
    });

    it("should work for real data", () => {
      const users = new Users(data.users);

      // - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
      // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 12345 на правильні дані
      expect(users.getAverageWomenAge()).to.deep.equal(36);
    });
  });

  // Написати юніт-тести для наступних методів
  // getMostCommonWomanHairColor - метод що повератє найбільш поширений колір волося серед жінок
  describe("getMostCommonWomanHairColor", ()=>{
    it("should be defined" , ()=>{
      const users = new Users(data.users)
      expect(users.getMostCommonWomanHairColor()).to.not.be.undefined
    })

    it("should return most common woman hair color", ()=>{
      const mockedData:TSimplifiedUser[] = [
        {
          firstName:"Anna",
          gender:"female",
          hair: {
            color: "Red",
            type: "Long",
          }
        },
        {
          firstName:"Anna2",
          gender:"female",
          hair: {
            color: "Red",
            type: "Short",
          }
        },
        {
          firstName:"Anna3",
          gender:"female",
          hair: {
            color: "Blue",
            type: "Long",
          }
        }
      ]

      const users = new Users(mockedData)
      expect(users.getMostCommonWomanHairColor()).to.deep.equal("Red");
    })

    it("should work with real data", ()=>{
      const users = new Users(data.users)
      expect(users.getMostCommonWomanHairColor()).to.deep.equal("Black");
    })
  })
  // getMostCommonManBloodType - метод що повератє найбільш поширениу групу крові серед чоловіків

  describe("getMostCommonManBloodType", ()=>{
    it("should be defined" , ()=>{
      const users = new Users(data.users)
      expect(users.getMostCommonManBloodType()).to.not.be.undefined
    })

    it("should return most common man blood type", ()=>{
      const mockedData:TSimplifiedUser[] = [
        {firstName:"Viktoria1", bloodGroup:"-B", gender:"female"},
        {firstName:"Viktor2", bloodGroup:"-B",   gender:"male"},
        {firstName:"Viktoria3", bloodGroup:"-C", gender:"female"},
        {firstName:"Viktor4", bloodGroup:"-C",   gender:"male"},
        {firstName:"Viktor5", bloodGroup:"-B",   gender:"male"}
      ] 

      const users = new Users(mockedData)
      expect(users.getMostCommonManBloodType()).to.deep.equal("-B")
    })

    it("should work with real data", ()=>{
      const users = new Users(data.users)
      expect(users.getMostCommonWomanHairColor()).to.deep.equal("A-");
    })
  })
});