"use strict";

/***** Funktionen 01 *****/


// // 1. Kapselung von Codeblöcken

// // Funktionsrumpf (body) callee
// function test()
// {
//     console.log("Hallo Sabine");
// }

// // Funktionsaufruf (call)

// test();

// function ausgabeNamenParam(firstName) {

// console.log("Hallo" + " " + firstName + "!");

// }

// ausgabeNamenParam("Sabine"); // Michael ist ein Argument "ausgabeNamenParam = ein Parameter"
// ausgabeNamenParam("Michael");

// ausgabeNamenParam(prompt("Vorname?"),prompt("nachname?"));

ausgabeNamenParams("Michael","Mueller")

function ausgabeNamenParams(firstName, familyName)
{
const gap = " ";
const outputStr = "Hallo" + gap + firstName + gap + familyName +"!";

console.log(outputStr);
}