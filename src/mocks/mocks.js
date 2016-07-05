var spot = roads => {
  var rotate = () => spot(roads.unshift(roads.pop()));
  return {roads, rotate};
};

var U = () => spot([1,0,0,0]);
var R = () => spot([0,1,0,0]);
var D = () => spot([0,0,1,0]);
var L = () => spot([0,0,0,1]);

var UR = () => spot([1,1,0,0]);
var UD = () => spot([1,0,1,0]);
var UL = () => spot([1,0,0,1]);
var RD = () => spot([0,1,1,0]);
var RL = () => spot([0,1,0,1]);
var DL = () => spot([0,0,1,1]);

var URD = () => spot([1,1,1,0]);
var URL = () => spot([1,1,0,1]);
var UDL = () => spot([1,0,1,1]);
var RDL = () => spot([0,1,1,1]);

var no = () => spot([0,0,0,0]);

var empty = () => ({empty: true});

export {U, R, D, L, UR, UD, UL, RD, RL, DL, URD, URL, UDL, RDL, no, empty};
