type TMyUser = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    domain: string;
    ip: string;
    address: {
        address: string;
        city: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        postalCode: string;
        state: string;
    };
    macAddress: string;
    university: string;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    };
    company: {
        address: {
            address: string;
            city?: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            postalCode: string;
            state: string;
        };
        department: string;
        name: string;
        title: string;
    };
    ein: string;
    ssn: string;
    userAgent: string;
};

class Users {
    // TODO: Add type for list property, remove `any` type annotation
    constructor(public list: TMyUser[]) {}

    // TODO: Write method that returns array of users names in format "John, Smith" ("firstName, lastName")
    // TODO: Need to fix code to use this.list property data
    getUsersNames() {
        return this.list.map(
            ({ firstName, lastName }) => firstName + ', ' + lastName
        );
    }

    // TODO: Write method that updates users age to current date (2023 year)
    // TODO: Need to fix code to use this.list property data
    // TODO: Need to not mutate this.list property, but return new array of users with updated age
    updateUsersAge() {
        return this.list.map((user) => {
            {
                return {
                    ...user,
                    age:
                        new Date().getFullYear() -
                        new Date(user.birthDate).getFullYear(),
                };
            }
        });
    }

    // TODO: Implement method that returns users from Ukraine (phone number +380)
    // TODO: Use this.list property data
    getUsersFromUkraine() {
        return this.list.filter(({ phone }) => phone.startsWith('+380'));
    }

    // TODO: Implement method that returns postal codes grouped by state, using this.list user data
    getStatePostalCodes() {
        type TStatePostalCodes = {
            name: Required<TMyUser>['address']['state'];
            postalCodes: Required<TMyUser>['address']['postalCode'][];
        }[];

        return this.list.reduce(
            (acc: TStatePostalCodes, { address: { state, postalCode } }) => {
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
    }

    getMediumWomenAge() {
        return (
            this.list.reduce((acc, { age, gender }) => {
                if (gender === '') {
                    return (acc += age);
                }
                return acc;
            }, 0) / this.list.length
        );
    }

    getMostCommonValue(obj: { [key: string]: number }) {
        let mostCommonValue = '';
        let maxCount = 0;

        for (const [key, value] of Object.entries(obj)) {
            if (value > maxCount) {
                mostCommonValue = key;
                maxCount = value;
            }
        }
        return mostCommonValue;
    }

    getMostCommonWoomanHairColor() {
        const hairColors: {
            [key: string]: number;
        } = {};

        this.list.forEach(({ gender, hair: { color } }) => {
            if (gender !== 'female') return;
            hairColors[color] = (hairColors[color] || 0) + 1;
        });
        return this.getMostCommonValue(hairColors);
    }

    getMostCommonManBloodType() {
        const bloodTypes: {
            [key: string]: number;
        } = {};

        this.list.forEach(({ gender, bloodGroup }) => {
            if (gender !== 'male') return;
            bloodTypes[bloodGroup] = (bloodTypes[bloodGroup] || 0) + 1;
        });
        return this.getMostCommonValue(bloodTypes);
    }
}
