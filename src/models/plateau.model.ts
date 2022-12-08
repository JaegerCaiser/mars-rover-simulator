import { Coordinate } from "../types/coordinate";
import { Rover } from "./rover.model";

export class Plateau {
    private _leftUpper: Coordinate
    private _rovers: Array<Rover>

    set leftUpper(coordinate: Coordinate) {
        this._leftUpper = coordinate;
    }

    get leftUpper(): Coordinate {
        return this._leftUpper;
    }

    public addRover(rover: Rover): Array<Rover> {
        if (this._rovers) {
            this._rovers = []
        }

        this._rovers.push(rover)

        return this._rovers;
    }

    get rovers(): Array<Rover> {
        return this._rovers;
    }
}