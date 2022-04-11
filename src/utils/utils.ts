export const createListNull = (width: number, height: number) => {
  const list: any = [];
  for (let i = 0; i < height; i++) {
    const newList = [];
    for (let j = 0; j < width; j++) {
      newList.push([]);
    }
    list.push(newList);
  }
  return list;
};

export const shuffle = (arr: any[]) => {
  let newarr: any[] = [...arr];
  const arr1: any[] = [];
  for (let i = 0; i < arr.length; i++) {
    const num: number = Math.floor(Math.random() * newarr.length);
    arr1.push(newarr[num]);
    newarr = newarr.filter((_, index) => index != num);
  }
  return arr1;
};
