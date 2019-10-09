'use strict';

import { Pirate } from './pirates';
import { Ship } from './ship';

let blackbeard = new Pirate ('Blackbeard', true, true);
let jackSparrow = new Pirate ('Jack Sparrow', false, true);
let scullywag = new Pirate ('Scullywag', false, false);
let wretchedThief = new Pirate ('Wretched Thief', true, false);
let alehound = new Pirate ('Alehound', false, false);
let groggyJoe = new Pirate ('Groggy Joe', true, false);
let timmyTheNavigator = new Pirate ('Timmy The Navigator', false, false);

blackbeard.work();
blackbeard.party();
console.log(blackbeard.toString());

let pirateShip = new Ship;

pirateShip.getPirateOnBoard(blackbeard);
pirateShip.getPirateOnBoard(jackSparrow);
pirateShip.getPirateOnBoard(scullywag);
pirateShip.getPirateOnBoard(wretchedThief);
pirateShip.getPirateOnBoard(alehound);
pirateShip.getPirateOnBoard(groggyJoe);
pirateShip.getPirateOnBoard(timmyTheNavigator);

pirateShip.lastDayOnTheShip();
pirateShip.prepareForBattle();
console.log(pirateShip.getPoorPirates());
console.log(pirateShip.getGolds())