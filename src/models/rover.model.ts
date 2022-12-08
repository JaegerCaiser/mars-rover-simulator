import { Orientation } from "../types/orientation";
import { Position } from "../types/position";

export class Rover {
    _initialPosition: Position;
    public executeCommand: (orientation: Orientation) => Position;

    set initialPosition(position: Position) {
        this._initialPosition = position;
    }

    get initialPosition() {
        return this._initialPosition
    }
}