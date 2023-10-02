// string manipulation utilities type
function exercise52() {
  // +TODO: write a utility type that for given object type T
  // will create a new type with all properties plus methods to get and set properties
  // plus methods to validate earch of the property
  type TObjectWitName = {
    name: string;
  };
  // +TODO: declare utility type TGettersSettersValidators (union of TGetters, TSetters, TValidators)
  type TGetters<T> = {
    [K in keyof T & string as `get${Capitalize<K>}`]: () => T[K]
  };

  type TSetters<T> = {
    [K in keyof T & string as `set${Capitalize<K>}`]: (U: string) => void;
  }

  type TValidators<T> = {
    [K in keyof T & string as `validate${Capitalize<K>}`]: () => boolean;
  }

  type TGettersSettersValidators<T> = TGetters<T> & TSetters<T> & TValidators<T>;
  // hint: TGetters for each of the property generates getXxxx method that returns property value
  // hint: TSetters for each of the property generates setXxxx method that sets property value
  // hint: TValidators for each of the property generates validateXxxx method that returns true if property value is valid
  const obj = {
    name: "point",
  };

  // +TODO: generate this type from TGettersSettersValidators using utility type
  type TObjectMethods = TGettersSettersValidators<TObjectWitName>;
  // +TODO: remvoe this declaration below and replac it with the one above
  // type TObjectMethods = {
  //   getName(): string;
  //   setName(name: string): void;
  //   validateName(): boolean;
  // };

  const object: TObjectWitName & TObjectMethods = {
    name: "point",
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

  // object.age = 20;
  // +TODO: add property age to object and check if you get type check errors
  console.log(object.getName());
  console.log(object.validateName());
  object.setName('test');
  console.log(object.getName());
  console.log(object.validateName());
}
exercise52();

// enums
function exercise53() {
  //+ TODO: declare enum Color with values Red, Green, Blue
  // +TODO: assing Red: 1, Green: 2, Blue: 4
  enum Color {
    Red = 1,
    Green = 2,
    Blue = 4,
  }

  // +TODO: declare a function that takes a color as a number and returns a string
  // +TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  function getColor(color: number): string {
    let result = "";

    // +TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    if (color & Color.Red) {
      result += "Red";
    }
    // +TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    if (color & Color.Green) {
      if (result.length > 0) {
        result += ", ";
      }
      result += "Green";
    }
    // +TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result
    if (color & Color.Blue) {
      if (result.length > 0) {
        result += ", ";
      }
      result += "Blue";
    }
    // +TODO: explain how bitmask works

    return result;
  }

  // +TODO: add test assertionsns using this table
  //console.assert(getColor(0) === "",'empty string, no color), bitmask ( 0 0 0 )') //(empty string, no color), bitmask ( 0 0 0 )
  console.log(getColor(0))
  console.log(getColor(1))
  console.log(getColor(2))
  console.log(getColor(3))
  console.log(getColor(4))
  console.log(getColor(5))
  console.log(getColor(6))
  console.log(getColor(7))
}
exercise53();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra3() {
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  function mergeSortedArrays(arr1: any, arr2: any): any {
    return [];
  }

  //   console.assert(
  //     mergeSortedArrays([1, 2, 3], [4, 5, 6]).toString() ===
  //       [1, 2, 3, 4, 5, 6].toString()
  //   );

  //   console.assert(
  //     mergeSortedArrays([3, 4, 5], [4, 5, 6]).toString() ===
  //       [3, 4, 4, 5, 5, 6].toString()
  //   );
  //   console.assert(
  //     mergeSortedArrays([3, 4, 5, 6, 6, 10, 20], [4, 5, 6]).toString() ===
  //       [3, 4, 4, 5, 5, 6, 6, 6, 10, 20].toString()
  //   );

  // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
}
exerciseExtra3();
