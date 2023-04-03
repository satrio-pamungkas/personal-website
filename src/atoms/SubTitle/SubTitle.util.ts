const util = {
  weight: (value: string) => {
    return `font-${value}`;
  },
  align: (value: string) => {
    return `text-${value}`;
  },
  size: (value: string) => {
    return `text-${findResponsive(value)} md:text-${value}`;
  }
}

const listSize = ['xs','sm','md','lg','xl','2xl','3xl','4xl'];

const findResponsive = (value?: string) => {
  let index: number = 0;
  for(let idx=0; idx<listSize.length; idx++) {
    if (listSize[idx] === value) {
      index = idx;
    }
  }

  if (index == 0) {
    return listSize[index];
  }
  return listSize[index-1];
}

export {
  util, listSize, findResponsive
}