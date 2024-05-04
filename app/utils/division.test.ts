import { division } from "./division";

test("Test functions that import server-only", () => {
  expect(division(9, 3)).toBe(3);
});

test("Test functions that import server-only", () => {
    expect(division(1, 0)).toBe("El divisor debe ser diferente de cero");
  });
  