type TMyUser = {
    id?: number;
    firstName?: string;
    lastName?: string;
    maidenName?: string;
    age?: number;
    gender?: string;
    email?: string;
    phone?: string;
    username?: string;
    password?: string;
    birthDate?: string;
    image?: string;
    bloodGroup?: string;
    height?: number;
    weight?: number;
    eyeColor?: string;
    hair?: {
        color?: string;
        type?: string;
    };
    domain?: string;
    ip?: string;
    address?: {
        address?: string;
        city?: string;
        coordinates?: {
            lat?: number;
            lng?: number;
        };
        postalCode?: string;
        state?: string;
    };
    macAddress?: string;
    university?: string;
    bank?: {
        cardExpire?: string;
        cardNumber?: string;
        cardType?: string;
        currency?: string;
        iban?: string;
    };
    company?: {
        address?: {
            address?: string;
            city?: string;
            coordinates?: {
                lat?: number;
                lng?: number;
            };
            postalCode?: string;
            state?: string;
        };
        department?: string;
        name?: string;
        title?: string;
    };
    ein?: string;
    ssn?: string;
    userAgent?: string;
};

type RequiredFields<T, K extends keyof T> = {
    [P in K]-?: T[P];
};

type q = RequiredFields<TMyUser, 'birthDate'>;

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
        type TList = (TMyUser & RequiredFields<TMyUser, 'birthDate' | 'age'>)[];

        return (this.list as TList).map((user) => {
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
        type TList = (TUser &
            RequiredFields<TMyUser, 'firstName' | 'lastName' | 'phone'>)[];

        return (this.list as TList).filter(({ phone }) =>
            phone.startsWith('+380')
        );
    }

    // TODO: Implement method that returns postal codes grouped by state, using this.list user data
    getStatePostalCodes() {
        type TStatePostalCodes = {
            name: Required<TMyUser>['address']['state'];
            postalCodes: Required<TMyUser>['address']['postalCode'][];
        }[];

        type TList = (Omit<TMyUser, 'address'> & {
            address: RequiredFields<
                Required<TMyUser>['address'],
                'postalCode' | 'state'
            >;
        })[];

        return (this.list as TList).reduce(
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
        type TList = (TMyUser & RequiredFields<TMyUser, 'gender' | 'age'>)[];

        return (
            (this.list as TList).reduce((acc, { age, gender }) => {
                if (gender === '') {
                    return (acc += age);
                }
                return acc;
            }, 0) / this.list.length
        );
    }
}
