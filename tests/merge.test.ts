import { merge } from "../src/merge";

describe("Merge function", () => {
  it("should merge 3 arrays correctly", () => {
    const collection_1: number[] = [1, 3, 4, 5];
    const collection_2: number[] = [9, 7, 4, 3, 2];
    const collection_3: number[] = [2, 6, 8];
    expect(merge(collection_1, collection_2, collection_3)).toEqual([
      1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("should merge 3 empty arrays correctly", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    expect(merge(collection_1, collection_2, collection_3)).toEqual([]);
  });
});
