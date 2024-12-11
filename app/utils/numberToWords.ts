// utils/numberToWords.ts

const ones: string[] = [
  "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
];

const teens: string[] = [
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
];

const tens: string[] = [
  "", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
];

const thousands: string[] = ["", "Thousand", "Lakh", "Crore"];

export const numberToWords = (num: number): string => {
  if (num === 0) return "Zero";

  const convertToWords = (n: number): string => {
    let word = "";

    if (n > 19) {
      word += tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + ones[n % 10] : "");
    } else if (n > 10) {
      word += teens[n - 11];
    } else {
      word += ones[n];
    }

    return word;
  };

  const getPart = (num: number, divisor: number): [number, number] => {
    const quotient = Math.floor(num / divisor);
    const remainder = num % divisor;
    return [quotient, remainder];
  };

  let result = "";
  const parts = [
    { divisor: 10000000, label: "Crore" },
    { divisor: 100000, label: "Lakh" },
    { divisor: 1000, label: "Thousand" },
    { divisor: 100, label: "Hundred" },
  ];

  for (const part of parts) {
    const [quotient, remainder] = getPart(num, part.divisor);
    if (quotient > 0) {
      result += `${numberToWords(quotient)} ${part.label} `;
      num = remainder;
    }
  }

  if (num > 0) {
    result += convertToWords(num);
  }

  return result.trim();
};
