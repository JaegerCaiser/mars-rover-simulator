import { Rover } from "../models/rover.model";
import { Coordinate } from "./coordinate";

export interface Simulator {
    rightUpper: Coordinate,
    rovers: Rover[];
}