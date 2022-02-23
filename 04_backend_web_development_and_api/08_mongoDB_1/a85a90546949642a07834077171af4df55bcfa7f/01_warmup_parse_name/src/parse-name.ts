type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const nameSplit = name.split(" ");
  return { firstName: nameSplit[0], lastName: nameSplit[1] };
}
