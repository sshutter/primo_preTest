export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let ans: number[] = [];
  let i1 = 0; // index for collection_1
  let i2 = collection_2.length - 1; // index for collection_2
  let i3 = 0; // index for collection_3

  while (i1 < collection_1.length && i2 >= 0 && i3 < collection_3.length) {
    if (
      collection_1[i1] <= collection_2[i2] &&
      collection_1[i1] <= collection_3[i3]
    ) {
      // if collection_1[i1] is the smallest
      ans.push(collection_1[i1]);
      i1++;
    } else if (
      collection_2[i2] <= collection_1[i1] &&
      collection_2[i2] <= collection_3[i3]
    ) {
      // if collection_2[i2] is the smallest
      ans.push(collection_2[i2]);
      i2--;
    } else if (
      collection_3[i3] <= collection_1[i1] &&
      collection_3[i3] <= collection_2[i2]
    ) {
      // if collection_3[i3] is the smallest
      ans.push(collection_3[i3]);
      i3++;
    }
  }

  // if collection_3 is empty first
  while (i1 < collection_1.length && i2 >= 0) {
    if (collection_1[i1] <= collection_2[i2]) {
      ans.push(collection_1[i1]);
      i1++;
    } else {
      ans.push(collection_2[i2]);
      i2--;
    }
  }

  // if collection_2 is empty first
  while (i1 < collection_1.length && i3 < collection_3.length) {
    if (collection_1[i1] <= collection_3[i3]) {
      ans.push(collection_1[i1]);
      i1++;
    } else {
      ans.push(collection_3[i3]);
      i3++;
    }
  }

  // if collection_1 is empty first
  while (i2 >= 0 && i3 < collection_3.length) {
    if (collection_2[i2] <= collection_3[i3]) {
      ans.push(collection_2[i2]);
      i2--;
    } else {
      ans.push(collection_3[i3]);
      i3++;
    }
  }

  // if collection_1 is empty last
  while (i1 < collection_1.length) {
    ans.push(collection_1[i1]);
    i1++;
  }

  // if collection_2 is empty last
  while (i2 >= 0) {
    ans.push(collection_2[i2]);
    i2--;
  }

  // if collection_3 is empty last
  while (i3 < collection_3.length) {
    ans.push(collection_3[i3]);
    i3++;
  }

  return ans;
}
