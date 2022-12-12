import { Plateau } from "../models/plateau.model";
import { Rover } from "../models/rover.model";
import { Coordinate } from "../types/coordinate";
import { Position } from "../types/position";
import { Simulator } from "../types/simulator-interface";
import { parseCoordinate, parseInstructions, parseStatingPosition } from '../parses/input-parser'

import { EOL } from 'os';

const lineBreak = EOL;

export const explore = (rightUpper: Coordinate, rovers: Rover[]) => {
    const plateau = new Plateau();
    plateau.rightUpper = rightUpper;
    plateau.addRovers(rovers)
    plateau.rovers.forEach(rover => {
        const position = rover.executeCommands()
        console.log(buildOutput(position))
    })
}


function buildOutput(finalPosition: Position): string {
    return finalPosition.x.toString() +
        ' ' +
        finalPosition.y.toString() +
        ' ' +
        finalPosition.orientation.heading;
}

export const createSimulator = (script: string): Simulator => {
    const parts = script.split(lineBreak);
    const rightUpper = parseCoordinate(parts[0].split(' '));
    const rovers: Rover[] = [];

    for (let i = 1; i < parts.length; i += 2) {
        const rover = new Rover();
        rover.initialPosition = parseStatingPosition(parts[i].split(' '));
        rover.instructions = parseInstructions(parts[i + 1].split(''));
        rovers.push(rover)
    }

    return {
        rightUpper: rightUpper,
        rovers
    }
}