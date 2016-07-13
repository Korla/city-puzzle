var spot = roads => {
  return {roads, empty: false};
};

var no = () => spot([0,0,0,0]);

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

var URDL = () => spot([1,1,1,1]);

var empty = () => ({empty: true});

var roadsEq = (s1, s2) => {
  var roadsEq = true;
  for(var i = 0; i < s1.length; i++) {
    roadsEq = roadsEq && s1[i] === s2[i];
  }
  return roadsEq
}
var eq = (s1, s2) => s1.empty === s2.empty && roadsEq(s1, s2);

var log = (...d) => d.forEach(a => console.log(JSON.stringify(a)));
var logMap = d => log(d) || d;

export {no, U, R, D, L, UR, UD, UL, RD, RL, DL, URD, URL, UDL, RDL, URDL, empty, eq, log, logMap};
