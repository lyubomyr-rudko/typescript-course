'use strict';

declare const chai: any;
declare const describe: any;
declare const it: any;
declare const xit: any;

describe('Users class', () => {
    const { expect } = chai;

    it('should be defined', () => {
        expect(Users).to.not.be.undefined;
    });

    it('should define constructor that accepts users list', () => {
        const users = new Users(data.users);

        expect(users.list).to.equal(data.users);
    });

    describe('getUsersNames method', () => {
        // - Написати метод що повератє масив імен усіх користувачів у форматі "John, Smith" ("firstName, lastName")

        it('should be defined', () => {
            const users = new Users(data.users);

            expect(users.getUsersNames).to.not.be.undefined;
        });

        it('should return list of user names', () => {
            const mockData = [
                { firstName: 'Bob', lastName: 'Smith' },
                { firstName: 'Jack', lastName: 'Chan' },
            ];

            const users = new Users(mockData as any);

            expect(users.getUsersNames()).to.deep.equal([
                'Bob, Smith',
                'Jack, Chan',
            ]);
        });

        it('should work for blank data', () => {
            const users = new Users([]);

            // - Виправити getUsersNames так, що цей юніт-тест проходив
            expect(users.getUsersNames()).to.deep.equal([]);
        });

        it('should work for real data', () => {
            const users = new Users(data.users);

            // - Дописати цей юніт-тест, так щоб використовувалися data.users
            expect(users.getUsersNames()).to.deep.equal(
                data.users.map(
                    ({ firstName, lastName }) => firstName + ', ' + lastName
                )
            );
        });
    });

    describe('updateUsersAge method', () => {
        // - Написати метод що виправляє вік користувачів, апдейтить дані користувачів правильним віком (age) на поточну дату, 2023 рік (використати день народження birthDate для обчислення віку)

        it('should be defined', () => {
            const users = new Users(data.users);

            expect(users.updateUsersAge).to.not.be.undefined;
        });

        it('should update users age', () => {
            const mockData = [
                {
                    firstName: 'Bob',
                    lastName: 'Smith',
                    age: 18,
                    birthDate: '2003-02-13',
                },
                {
                    firstName: 'Jack',
                    lastName: 'Chan',
                    age: 28,
                    birthDate: '1993-02-13',
                },
            ];

            const users = new Users(mockData as any);

            const usersAges = users.updateUsersAge().map((user) => user.age);

            expect(usersAges).to.deep.equal([20, 30]);
        });

        it('should work for blank data', () => {
            const users = new Users([]);

            const usersAges = users.updateUsersAge().map((user) => user.age);

            // - Виправити updateUsersAge так, що цей юніт-тест проходив
            expect(usersAges).to.deep.equal([]);
        });

        it('should work for real data', () => {
            const users = new Users(data.users);

            const usersAges = users.updateUsersAge().map((user) => user.age);
            const expectedResult = data.users.map(
                ({ birthDate }) =>
                    new Date().getFullYear() - new Date(birthDate).getFullYear()
            );

            // - Виправити updateUsersAge так, що цей юніт-тест проходив
            // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 1, 2, 3 на правильні дані
            expect(usersAges).to.deep.equal(expectedResult);
        });
    });

    describe('getUsersFromUkraine method', () => {
        // - Написати функцію що повератє список користувачів з України (номер телефону +380).

        it('should be defined', () => {
            const users = new Users(data.users);

            expect(users.getUsersFromUkraine).to.not.be.undefined;
        });

        it('should return list of users from Ukraine', () => {
            const mockData = [
                {
                    firstName: 'Bob',
                    lastName: 'Smith',
                    phone: '+7 813 117 7139',
                },
                {
                    firstName: 'Jack',
                    lastName: 'Chan',
                    phone: '+7 813 117 7139',
                },
                {
                    firstName: 'Ove',
                    lastName: 'Malyk',
                    phone: '+3809525426549',
                },
                {
                    firstName: 'Myk',
                    lastName: 'Franko',
                    phone: '+3809625426549',
                },
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
                firstName: 'Myk',
                lastName: 'Franko',
                phone: '+3809625426549',
            });

            expect(usersNamesAndPhones).to.deep.include({
                firstName: 'Ove',
                lastName: 'Malyk',
                phone: '+3809525426549',
            });
        });

        it('should work for real data', () => {
            const users = new Users(data.users);

            const usersNamesAndPhones = users
                .getUsersFromUkraine()
                .map(({ firstName, lastName, phone }) => ({
                    firstName,
                    lastName,
                    phone,
                }));
            const expectedResult = data.users
                .filter(({ phone }) => phone.startsWith('+380'))
                .map(({ firstName, lastName, phone }) => ({
                    firstName,
                    lastName,
                    phone,
                }));

            expect(usersNamesAndPhones.length).to.equal(1);

            // - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
            for (const user of expectedResult) {
                expect(usersNamesAndPhones).to.deep.include(user);
            }
        });
    });

    describe('getStatePostalCodes method', () => {
        // - Написати функцію що на основі даних усіх користувачів повератє масив штатів і їх поштових індексів у вигляді масиву обєктів [{"name": "AK", "postalCodes": ["99503", "..."]}]. Штати не повинні повторюватися.

        it('should be defined', () => {
            const users = new Users(data.users);

            expect(users.getStatePostalCodes).to.not.be.undefined;
        });

        it('should return list of postal codes for all states', () => {
            const mockData = [
                {
                    firstName: 'Joe',
                    address: {
                        postalCode: '80003',
                        state: 'CO',
                    },
                },
                {
                    firstName: 'Bob',
                    address: {
                        postalCode: '80004',
                        state: 'CO',
                    },
                },
                {
                    firstName: 'Mike',
                    address: {
                        postalCode: '10001',
                        state: 'AK',
                    },
                },
            ];

            const users = new Users(mockData as any);

            expect(users.getStatePostalCodes()).to.deep.equal([
                { name: 'CO', postalCodes: ['80003', '80004'] },
                { name: 'AK', postalCodes: ['10001'] },
            ]);
        });

        it('should work for real data', () => {
            const users = new Users(data.users);

            type TStatePostalCodes = {
                name: Required<TMyUser>['address']['state'];
                postalCodes: Required<TMyUser>['address']['postalCode'][];
            }[];

            const expectedResult: TStatePostalCodes = data.users.reduce(
                (
                    acc: TStatePostalCodes,
                    { address: { state, postalCode } }
                ) => {
                    const indx = acc.findIndex(({ name }) => name === state);

                    if (indx >= 0) {
                        acc[indx].postalCodes.push(postalCode);
                    } else {
                        acc.push({
                            name: state,
                            postalCodes: [postalCode],
                        });
                    }
                    return acc;
                },
                []
            );

            // - Виправити метод getStatePostalCodes так, щоб цей юніт-тест проходив
            // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити XXX на правильні дані
            expect(users.getStatePostalCodes()).to.deep.equal(expectedResult);
        });
    });

    describe('getAverageWomenAge method', () => {
        // - Написати функцію що повератє середній вік всіх жінок ("gender": "female")

        it('should be defined', () => {
            const users = new Users(data.users);

            expect(users.getMediumWomenAge).to.not.be.undefined;
        });

        it('should work for real data', () => {
            const users = new Users(data.users);
            const expectedResult =
                data.users.reduce((acc: number, { age, gender }) => {
                    if (gender === '') {
                        return (acc += age);
                    }
                    return acc;
                }, 0) / data.users.length;

            expect(users.getMediumWomenAge()).to.equal(expectedResult);

            // - Виправити метод getUsersFromUkraine так, щоб цей юніт-тест проходив
            // - Дописати цей юніт-тест, так щоб використовувалися data.users - замінити 12345 на правильні дані
        });
    });

    // Написати юніт-тести для наступних методів
    // getMostCommonWoomanHairColor - метод що повератє найбільш поширений колір волося серед жінок

    describe('getMostCommonWoomanHairColor method', () => {
        it('should be defined', () => {
            const users = new Users(data.users);

            expect(users.getMostCommonWoomanHairColor).to.not.be.undefined;
        });

        it('should work for real data', () => {
            const users = new Users(data.users);
            const hairColors: {
                [key: string]: number;
            } = {};
            data.users.forEach(({ gender, hair: { color } }) => {
                if (gender !== 'female') return;
                hairColors[color] = (hairColors[color] || 0) + 1;
            });
            let mostCommonColor = '';
            let maxCount = 0;

            for (const [color, count] of Object.entries(hairColors)) {
                if (count > maxCount) {
                    mostCommonColor = color;
                    maxCount = count;
                }
            }
            expect(users.getMostCommonWoomanHairColor()).to.equal(
                mostCommonColor
            );
        });
    });

    // getMostCommonManBlodType - метод що повератє найбільш поширениу групу крові серед чоловіків

    describe('getMostCommonManBloodType method', () => {
        it('should be defined', () => {
            const users = new Users(data.users);

            expect(users.getMostCommonManBloodType).to.not.be.undefined;
        });

        it('should work for real data', () => {
            const users = new Users(data.users);

            const bloodTypes: {
                [key: string]: number;
            } = {};
            data.users.forEach(({ gender, bloodGroup }) => {
                if (gender !== 'male') return;
                bloodTypes[bloodGroup] = (bloodTypes[bloodGroup] || 0) + 1;
            });
            let mostCommonBloodType = '';
            let maxCount = 0;

            for (const [bloodType, count] of Object.entries(bloodTypes)) {
                if (count > maxCount) {
                    mostCommonBloodType = bloodType;
                    maxCount = count;
                }
            }
            expect(users.getMostCommonManBloodType()).to.equal(
                mostCommonBloodType
            );
        });
    });
});
