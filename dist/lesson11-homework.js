"use strict";
class Users {
    list;
    // TODO: Add type for list property, remove `any` type annotation
    constructor(list) {
        this.list = list;
    }
    // TODO: Write method that returns array of users names in format "John, Smith" ("firstName, lastName")
    // TODO: Need to fix code to use this.list property data
    getUsersNames() {
        return this.list.map(user => `${user.firstName}, ${user.lastName}`);
    }
    // TODO: Write method that updates users age to current date (2023 year)
    // TODO: Need to fix code to use this.list property data
    // TODO: Need to not mutate this.list property, but return new array of users with updated age
    updateUsersAge() {
        return this.list.map((user) => {
            const usersCopy = { ...user };
            if (usersCopy.birthDate && usersCopy.age) {
                usersCopy.age = new Date().getFullYear() - new Date(usersCopy.birthDate).getFullYear();
            }
            return usersCopy;
        });
    }
    // TODO: Implement method that returns users from Ukraine (phone number +380)
    // TODO: Use this.list property data
    getUsersFromUkraine() {
        return this.list.filter(user => user.phone?.startsWith("+380"));
    }
    // TODO: Implement method that returns postal codes grouped by state, using this.list user data
    getStatePostalCodes() {
        const postalCodeMap = {};
        this.list.forEach(user => {
            const state = user.address?.state;
            if (state && user.address?.postalCode) {
                if (!postalCodeMap[state]) {
                    postalCodeMap[state] = [];
                }
                postalCodeMap[state].push(user.address.postalCode);
            }
        });
        return Object.keys(postalCodeMap).map((state) => ({
            name: state,
            postalCodes: postalCodeMap[state],
        }));
    }
    getAverageWomenAge() {
        const femaleUsers = this.list.filter(user => user.gender === "female");
        const sumOfAges = femaleUsers.reduce((total, user) => total + (user.age || 0), 0);
        const averageAge = sumOfAges / (femaleUsers.length || 1); // Avoid division by zero
        return Math.floor(averageAge);
    }
    getMostCommonWomanHairColor() {
        const femaleUsers = this.list.filter(user => user.gender === "female");
        const hairColorCount = {};
        femaleUsers.forEach(user => {
            const hairColor = user.hair?.color || "Unknown"; // Default to "Unknown" if hair color is missing
            hairColorCount[hairColor] = (hairColorCount[hairColor] || 0) + 1;
        });
        let mostCommonColor = "Unknown";
        let maxCount = 0;
        for (const color in hairColorCount) {
            if (hairColorCount[color] > maxCount) {
                mostCommonColor = color;
                maxCount = hairColorCount[color];
            }
        }
        return mostCommonColor;
    }
    getMostCommonManBloodType() {
        const maleUsers = this.list.filter(user => user.gender === "male");
        const bloodTypeCount = {};
        maleUsers.forEach(user => {
            const bloodType = user.bloodGroup || "Unknown";
            bloodTypeCount[bloodType] = (bloodTypeCount[bloodType] || 0) + 1;
        });
        let mostCommonType = "Unknown";
        let maxCount = 0;
        for (const type in bloodTypeCount) {
            if (bloodTypeCount[type] > maxCount) {
                mostCommonType = type;
                maxCount = bloodTypeCount[type];
            }
        }
        return mostCommonType;
    }
}
