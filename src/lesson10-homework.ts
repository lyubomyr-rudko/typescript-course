import { type } from 'os';

// string manipulation utilities type
function exercise52() {
    type TObjectWitName = Record<'name', string>;

    const obj: TObjectWitName = {
        name: 'point',
    };

    type TGetters<T> = {
        [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K];
    };
    type TSetters<T> = {
        [K in keyof T & string as `set${Capitalize<K>}`]: (P: string) => void;
    };
    type TValidators<T> = {
        [K in keyof T & string as `validate${Capitalize<K>}`]: () => boolean;
    };

    type TGettersSettersValidators<T> = TGetters<T> &
        TSetters<T> &
        TValidators<T>;

    type TObjectMethods = TGettersSettersValidators<TObjectWitName>;

    const object: TObjectWitName & TObjectMethods = {
        name: 'point',
        getName() {
            return this.name;
        },
        setName(name) {
            this.name = name;
        },
        validateName() {
            return this.name.length > 0;
        },
    };

    // type TGettersSettersValidators<T> =
    //     | TGetters<T>
    //     | TSetters<T>
    //     | TValidators<T>;

    // type GenerateMethods<T> = {
    //     [K in keyof T]: T[K] extends (...arss: any) => any ? K : never;
    // };
    // type TObjectMethods<T> = {
    //     [K in T]: T[K] extends (...arss: any) => any ? K : never;
    // };

    // const object: TObjectWitName &
    //     TObjectMethods<TGettersSettersValidators<TObjectWitName>> = {
    //     name: 'point',
    //     getName() {
    //         return this.name;
    //     },
    //     setName(name) {
    //         this.name = name;
    //     },
    //     validateName() {
    //         return this.name.length > 0;
    //     },
    // };
    /*
     ! take an ERRORS:
     ! 1. Type '() => string' is not assignable to type '"getName"'.
     ! 2. Type '(name: string) => void' is not assignable to type '"setName"'
     ! 3. Type '() => boolean' is not assignable to type '"validateName"' */

    console.log(object.getName());
    console.log(object.validateName());
    object.setName('');
    console.log(object.getName());
    console.log(object.validateName());
    object.setName('name');
    console.log(object.getName());
    console.log(object.validateName());
}
exercise52();

// enums
function exercise53() {
    enum Color {
        Red = 1,
        Green = 2,
        Blue = 4,
    }

    function getColor(color: number): string {
        let result = '';

        if ((color & Color.Red) === Color.Red) {
            result += 'Red';
        }
        if ((color & Color.Green) === Color.Green) {
            if (result) {
                result += ', ';
            }
            result += 'Green';
        }
        if ((color & Color.Blue) === Color.Blue) {
            if (result) {
                result += ', ';
            }
            result += 'Blue';
        }

        return result;
    }

    // TODO: add test assertionsns using this table
    console.assert(getColor(0) === ''); // (empty string, no color), bitmask ( 0 0 0 )
    console.assert(getColor(1) === 'Red'); // bitmask ( 0 0 1 )
    console.assert(getColor(2) === 'Green'); // bitmask ( 0 1 0 )
    console.assert(getColor(3) === 'Red, Green'); // bitmask ( 0 1 1 )
    console.assert(getColor(4) === 'Blue'); // bitmask ( 1 0 0 )
    console.assert(getColor(5) === 'Red, Blue'); // bitmask ( 1 0 1 )
    console.assert(getColor(6) === 'Green, Blue'); // bitmask   ( 1 1 0 )
    console.assert(getColor(7) === 'Red, Green, Blue'); // bitmask ( 1 1 1 )
}
exercise53();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra3() {
    function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
        const mergedSortedArrays: number[] = [];
        let i = 0;
        let j = 0;

        while (i < arr1.length || j < arr2.length) {
            if (j >= arr2.length) {
                mergedSortedArrays.push(arr1[i]);
                i++;
            } else if (i >= arr1.length) {
                mergedSortedArrays.push(arr2[j]);
                j++;
            } else if (arr1[i] < arr2[j]) {
                mergedSortedArrays.push(arr1[i]);
                i++;
            } else {
                mergedSortedArrays.push(arr2[j]);
                j++;
            }
        }

        return mergedSortedArrays;
    }

    console.assert(
        mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() ===
            [1, 2, 3, 4, 5, 6].toString()
    );

    console.assert(
        mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() ===
            [3, 4, 4, 5, 5, 6].toString()
    );
    console.assert(
        mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
            [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString()
    );
}
exerciseExtra3();
