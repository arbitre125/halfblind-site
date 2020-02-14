export const squareToIndices = square => {
  const x = 8 - Number(square.charAt(1));
  const y =
    square.charAt(0) === "a"
      ? 0
      : square.charAt(0) === "b"
      ? 1
      : square.charAt(0) === "c"
      ? 2
      : square.charAt(0) === "d"
      ? 3
      : square.charAt(0) === "e"
      ? 4
      : square.charAt(0) === "f"
      ? 5
      : square.charAt(0) === "g"
      ? 6
      : 7;
  return [x, y];
};
