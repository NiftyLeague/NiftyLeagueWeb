export const formatNumberToDisplay = (num: number, digits = 2) =>
  num
    ? num.toLocaleString(undefined, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      })
    : 0;
