
export const isJsonString = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const __ = (str: string) => {
  return str;
};

export const sliceString = (str: string) => {
  if (str.length > 6) {
    return `${str.slice(0, 6)}..`;
  }
  return str;
};

export const shortName = (name: string) => {
  return name.split(' ').length === 1
    ? name.split(' ').map((item) => item.slice(0, 3).toLocaleUpperCase())
    : name.split(' ').length === 2
    ? name
        .split(' ')
        .map((item, i) => {
          if (i === 0) return item.charAt(0).toLocaleUpperCase();
          return item.slice(0, 2).toLocaleUpperCase();
        })
        .join('')
    : name
        .split(' ')
        .map((item) => item.charAt(0).toLocaleUpperCase())
        .join('');
};


export const getNameMediaItem = (name: string) => {
  if (name.length > 20) {
    let str1 = name.substring(0, 13);
    let index = name.lastIndexOf('.');
    if (index > 18) {
      let str2 = name.slice(index - 2);
      return `${str1}...${str2}`;
    } else {
      let str2 = name.substring(name.length - 4, name.length);
      return `${str1}...${str2}`;
    }
  }
  return name;
};

export const renderUrlAutoLogin = (url: string, token: string) => {
  return `http://${url}?autoLoginToken=${token}`;
};
