// string manipulation utilities type
function exercise52() {
  // TODO: write a utility type that for given object type T
  // will create a new type with all properties plus methods to get and set properties
  // plus methods to validate earch of the property
  type TObjectWitName = {
    name: string;
  };
  // TODO: declare utility type TGettersSettersValidators (union of TGetters, TSetters, TValidators)
  // hint: TGetters for each of the property generates getXxxx method that returns property value
  // hint: TSetters for each of the property generates setXxxx method that sets property value
  // hint: TValidators for each of the property generates validateXxxx method that returns true if property value is valid
  type TGetters<T> = {
    [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K];
  };
  type TSetters<T> = {
    [K in keyof T & string as `set${Capitalize<K>}`]: (key: T[K]) => void;
  };
  type TValidators<T> = {
    [K in keyof T & string as `validate${Capitalize<K>}`]: () => boolean;
  };
  type TGettersSettersValidators<T> = TGetters<T> | TSetters<T> | TValidators<T>;
  const obj = {
    name: "point",
  };

  // TODO: generate this type from TGettersSettersValidators using utility type
  type TObjectMethods = TGettersSettersValidators<typeof obj>;
  // TODO: remvoe this declaration below and replac it with the one above
  // type TObjectMethods = {
  //   getName(): string;
  //   setName(name: string): void;
  //   validateName(): boolean;
  // };

  const object: TObjectMethods & TObjectWitName = {
    name: "point",
    // age:23,
    getName() {
      return this.name;
    },
    setName(name: string) {
      this.name = name;
    },
    validateName() {
      return this.name.length > 0;
    },
  };

  // TODO: add property age to object and check if you get type check errors
}
exercise52();

// enums
function exercise53() {
  // TODO: declare enum Color with values Red, Green, Blue
  // TODO: assing Red: 1, Green: 2, Blue: 4
  enum Color {
    None,
    Red,
    Green,
    Blue = 1 << 2,
  }

  // TODO: declare a function that takes a color as a number and returns a string
  // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  function getColor(color: number): string {
    let result = "";

    if (Color.None & color) {
      result += "";
    }
    // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    if (Color.Red & color) {
      if (result) {
        result += ", ";
      }
      result += "Red";
    }
    // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    if (Color.Green & color) {
      if (result) {
        result += ", ";
      }
      result += "Green";
    }
    // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
    if (Color.Blue & color) {
      if (result) {
        result += ", ";
      }
      result += "Blue";
    }
    // TODO: explain how bitmask works
    // Bitmask відображає чи влазить цей елемент в передане число, починаючи з найбільшого, а якщо нема то відображає 0 , і перще місце займає найбільший enum елемент
    // тобто якщо передати в функцію число 5 , то це буде (1,0,1) , бо в 5 влазить BLUE(4) , а в остаток GREEN(2) не влазить тому відображає 0 на другому місці, а на останнбому RED(1) бо остаток 1.
    // і це як залишок від ділення на суму усіх enumів , тобто стеля це 7, і якщо передати 8 наприклад то буде (0.0.0), а 9 то (0.0.1)
    // 

    return result;
  }
  // TODO: add test assertionsns using this table
  console.assert(getColor(0) === "", "0 failed"); // (empty string, no color), bitmask ( 0 0 0 )
  console.assert(getColor(1) === "Red", "RED failed"); // bitmask ( 0 0 1 )
  console.assert(getColor(2) === "Green", "GREEN failed"); // bitmask ( 0 1 0 )
  console.assert(getColor(3) === "Red, Green", "GREEN, RED failed"); // bitmask ( 0 1 1 )
  console.assert(getColor(4) === "Blue", "BLUE failed"); // bitmask ( 1 0 0 )
  console.assert(getColor(5) === "Red, Blue", "RED, BLUE failed"); // bitmask ( 1 0 1 )
  console.assert(getColor(6) === "Green, Blue", "GREEN, BLUE failed"); // bitmask   ( 1 1 0 )
  console.assert(getColor(7) === "Red, Green, Blue", "RED, GREEN, BLUE failed"); // bitmask ( 1 1 1 )
}
exercise53();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra3() {
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  function mergeSortedArrays<T extends string | number>(arr1: T[], arr2: T[]): T[] {
    return [...arr1, ...arr2].sort((a, b) => (a < b ? -1 : 1));
  }

  console.assert(
    mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() === [1, 2, 3, 4, 5, 6].toString(),
    "First failed"
  );
  console.assert(
    mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() === [3, 4, 4, 5, 5, 6].toString(),
    "Second failed"
  );
  console.assert(
    mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
      [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString(),
    "Third failed"
  );

  // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
}
exerciseExtra3();
