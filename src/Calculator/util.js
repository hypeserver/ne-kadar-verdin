export const brackets = {
  2018: {
    14800: 0.15,
    19200: 0.2,
    86000: 0.27,
    "last": 0.35,
  },
  2017: {
    13000: 0.15,
    17000: 0.2,
    80000: 0.27,
    "last": 0.35,
  },
  2016: {
    12600: 0.15,
    17400: 0.2,
    39000: 0.27,
    "last": 0.35,
  },
  2015: {
    12000: 0.15,
    17000: 0.2,
    80000: 0.27,
    "last": 0.35,
  },
  2014: {
    11000: 0.15,
    16000: 0.2,
    70000: 0.27,
    "last": 0.35,
  },
  2013: {
    10700: 0.15,
    15300: 0.2,
    68000: 0.27,
    "last": 0.35,
  },
  2012: {
    10000: 0.15,
    15000: 0.2,
    63000: 0.27,
    "last": 0.35,
  },
  2011: {
    9400: 0.15,
    13600: 0.2,
    57000: 0.27,
    "last": 0.35,
  },
  2010: {
    8800: 0.15,
    13200: 0.2,
    74200: 0.27,
    "last": 0.35,
  },
  2009: {
    8800: 0.15,
    13200: 0.2,
    28000: 0.27,
    "last": 0.35,
  },
};

export const calculate = (wages) => {
  function calculate_yearly_tax(bracket, wage) {
    let amount = wage;
    let total_tax = 0;
    let tax;
    for (var key in bracket) {
      if (amount > 0) {
        const ratio = bracket[key];
        if (key !== "last" && amount > key) {
          tax = key * ratio;
        }
        else {
          tax = amount * ratio;
        }
        amount -= key;
        total_tax += tax;
      }
    }
    return total_tax;
  }
  
  function calculate_total_taxes(brackets, wages) {
    let total = 0;
    for (var year in wages) {
      const yearly_tax = calculate_yearly_tax(brackets[year], wages[year]);
      total += yearly_tax;
    }
    return total;
  }

  return calculate_total_taxes(brackets, wages);
}