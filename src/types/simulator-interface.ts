import { Coordinate } from "./coordinate";
import { Instruction } from "./instructions";
import { Position } from "./position";

export interface Simulator {
    topRightBoundary: Coordinate,
    instructions: Array<Instruction>
}