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
