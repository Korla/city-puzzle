var spotFn = roads => () => {
  var rotate = () => spot(roads.unshift(roads.pop()));
  return {roads, rotate, empty: false};
};

var no = spotFn([0,0,0,0]);

var U = spotFn([1,0,0,0]);
var R = spotFn([0,1,0,0]);
var D = spotFn([0,0,1,0]);
var L = spotFn([0,0,0,1]);

var UR = spotFn([1,1,0,0]);
var UD = spotFn([1,0,1,0]);
var UL = spotFn([1,0,0,1]);

var RD = spotFn([0,1,1,0]);
var RL = spotFn([0,1,0,1]);
var DL = spotFn([0,0,1,1]);

var URD = spotFn([1,1,1,0]);
var URL = spotFn([1,1,0,1]);
var UDL = spotFn([1,0,1,1]);
var RDL = spotFn([0,1,1,1]);

var URDL = spotFn([1,1,1,1]);

var empty = () => ({empty: true});

export {no, U, R, D, L, UR, UD, UL, RD, RL, DL, URD, URL, UDL, RDL, URDL, empty};
