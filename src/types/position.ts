import { Coordinate } from "./coordinate";
import { Orientation } from "./orientation";

export interface Position extends Coordinate {
    orientation: Orientation;
}