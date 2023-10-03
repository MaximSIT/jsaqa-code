const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  test("Should return 0", () => {
    const input = ["Властелин Колец", "Властелин Колец"];
    const expected = ["Властелин Колец", "Властелин Колец"];
    const result = sorting.sortByName(input);
    expect(result).toEqual(expected);
  });
});
