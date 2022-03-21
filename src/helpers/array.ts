export const extractColumnFromObjectArray = (allTags: any[], column: string) => allTags.map((x) => x[column]);

export const compressArrayToObjectListKeyByColumn = (array: any[], column: string) => {
  const object: any = {};
  array.map((item: any) => {
    return (object[item[column]] = { ...item });
  });
  return object;
};
