// const receivedObject = {
//   a: 'somestring',
//   b: 42
// }

type ReceivedObject = {
  a: string;
  b: number;
};

function transformObject(object: ReceivedObject): (string | number)[] {
  return Object.values(object);
}

// Leave the line below for tests to work properly.
export { transformObject };
