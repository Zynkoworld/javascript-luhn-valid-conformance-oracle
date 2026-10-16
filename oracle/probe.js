const valid = (number) => {
  const trimmed = number.replace(/\s/g, '');
  const digits = [...trimmed];

  const sum = digits
    // convert to integers
    .map((d) => parseInt(d, 10))
    // double the second digits, starting from right
    .map((d, i) => {
      if ((i + digits.length) % 2 === 0) {
        return d * 2;
      }
      return d;
    })
    // limit to digits less than 10
    .map((d) => {
      if (d > 9) {
        return d - 9;
      }
      return d;
    })
    // sum all digits
    .reduce((acc, d) => acc + d, 0);

  return digits.length > 1 && sum % 10 === 0;
};

const __in = ["1", "0", "059", "055 444 285", "055 444 286", "8273 1232 7352 0569", "1 2345 6789 1234 5678 9013", "095 245 88", "059a", "055-444-285", "055# 444$ 285", "0000 0", "091", "9999999999 9999999999 9999999999 9999999999", "055b 444 285", ":9"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: valid(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
