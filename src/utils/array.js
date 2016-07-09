var flatten = a => a.reduce((prev, curr) => prev.concat(curr), []);
var zip = (a1, a2) => a1.map((e, i) => [a1[i], a2[i]]);

export {flatten, zip};
