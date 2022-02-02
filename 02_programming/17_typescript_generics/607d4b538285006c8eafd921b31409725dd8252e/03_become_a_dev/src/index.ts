type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};

type Dev = Human & {
  knownLanguage: string;
};

function becomeADev(object: Human): Dev {
  return { ...object, knowsDev: true, knownLanguage: "JavaScript" };
}

// Leave the line below for tests to work properly.
export { becomeADev };
