export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};


export const getObjAttrFromString = (object: {}, string: string) => {
  let attr: string
  let rest: string = string
  let auxObject: any = { ...object }

  while (rest.includes('.')) {
     attr = rest.slice(0, rest.indexOf('.'))
     rest = rest.slice(rest.indexOf('.') + 1, rest.length)
     auxObject = auxObject[attr]
  }

  return auxObject[rest]
}