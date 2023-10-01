// string manipulation utilities type
function exercise52() {
  // TODO: write a utility type that for given object type T
  // will create a new type with all properties plus methods to get and set properties
  // plus methods to validate earch of the property
  type TUtilityGet <T>={
    [P in keyof T as P extends string?`get${P}`:never]: ()=>T[P];
  }
  type TUtilitySet <T>={
    [P in keyof T as P extends string?`set${P}`:never]: (P:T[P])=>void;
  }
  type TUtilityValidate <T>={
    [P in keyof T as P extends string?`validate${P}`:never]: ()=>boolean;
  }
  type TObjectWitName = {
    name: string;
  };
  type TCompileObject<T>=TUtilityGet<T> & TUtilitySet<T> & TUtilityValidate<T>;

  type TObjectExpendet = TCompileObject<TObjectWitName>;

  const test1:TCompileObject<TObjectWitName> & ThisType<TObjectWitName> & TObjectWitName={
    name:'Jon',
    getname(){return this.name},
    setname(name){ this.name =name},
    validatename(){return true}
  }

  // TODO: declare utility type TGettersSettersValidators (union of TGetters, TSetters, TValidators)
  // hint: TGetters for each of the property generates getXxxx method that returns property value
  // hint: TSetters for each of the property generates setXxxx method that sets property value
  // hint: TValidators for each of the property generates validateXxxx method that returns true if property value is valid
  type TGetters <T>={
    [P in keyof T as P extends string?`get${Capitalize<P>}`:never]: ()=>T[P];
  }
  type TSetters <T>={
    [P in keyof T as P extends string?`set${Capitalize<P>}`:never]: (P:T[P])=>void;
  }
  type TValidators <T>={
    [P in keyof T as P extends string?`validate${Capitalize<P>}`:never]: ()=>boolean;
  }
  type TGettersSettersValidators<T>=TGetters<T> & TSetters<T> & TValidators<T> & ThisType<T>;
  const obj = {
    name: "point",
  };

  // TODO: generate this type from TGettersSettersValidators using utility type
  // type TObjectMethods = TGettersSettersValidators<typeof obj>;
  // TODO: remvoe this declaration below and replac it with the one above
  type TObjectMethods = TGettersSettersValidators<typeof obj>

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

  // TODO: add property age to object and check if you get type check errors
}
exercise52();

// enums
function exercise53() {
  // TODO: declare enum Color with values Red, Green, Blue
  // TODO: assing Red: 1, Green: 2, Blue: 4
  enum Color {
    Red=1,
    Green=2,
    Blue=4,
  }

  // TODO: declare a function that takes a color as a number and returns a string
  // TODO: use bitmask bitwise AND operator to check if color has Red, Green, Blue
  function getColor(colorNum: number): string {
    let result:string[] = []; 
    const keys = Object.keys(Color).filter(el=>isNaN(Number(el)));
    for(const i of keys){
      console.log('result',(colorNum & Color[i as keyof typeof Color]) )
      if((colorNum & Color[i as keyof typeof Color])) result.push(i);
    }
    // TODO: check if red bit is set by bitwise & operator, if so - add "Red" to result
    // TODO: check if green bit is set by bitwise & operator, if so - add "Green" to result
    // TODO: check if blue bit is set by bitwise & operator, if so - add "Blue" to result

    // TODO: explain how bitmask works
    return result.join(',');
  }

  // TODO: add test assertionsns using this table
  //console.assert(getColor(0) === "",'empty string, no color), bitmask ( 0 0 0 )') //(empty string, no color), bitmask ( 0 0 0 )
  console.assert(getColor(1) === "Red",  'bitmask ( 0 0 1 )')
  console.assert(getColor(2) === "Green", '// bitmask ( 0 1 0 )')
  console.assert(getColor(3) === "Red, Green", 'Red, Green // bitmask ( 0 1 1 )')
  console.assert(getColor(4) === "Blue", '//bitmask ( 1 0 0 )')
  console.assert(getColor(5) === "Red, Blue", '"Red, Blue" // bitmask ( 1 0 1 )')
  console.assert(getColor(6) === "Green, Blue", 'Green, Blue // bitmask   ( 1 1 0 )')
  console.assert(getColor(7) === "Red, Green, Blue", 'Red, Green, Blue// bitmask ( 1 1 1 )')
}
exercise53();

// This is an algorithmic problem - use your algorithmic skills and typescript knowledge to solve it
function exerciseExtra3() {
  // TODO: write a function to  merge two sorted arrays of numbers into one sorted array
  type TIncomParam = Array<string> | Array<number>;
  function mergeSortedArrays<T extends TIncomParam>(arr1: T, arr2: T): T {
    
    const collector = [...arr1, arr2].sort();
    return collector;
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

  // TODO: convert mergeSortedArrays to a generic function to support strings and numbers
}
exerciseExtra3();
