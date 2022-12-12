import { Coordinate } from "../types/coordinate";
import { Rover } from "./rover.model";

export class Plateau {
    private _rightUpper: Coordinate
    private _rovers: Array<Rover>

    set rightUpper(coordinate: Coordinate) {
        this._rightUpper = coordinate;
    }

    get rightUpper(): Coordinate {
        return this._rightUpper;
    }

    public addRover(rover: Rover): Array<Rover> {
        if (!this._rovers) {
            this._rovers = []
        }

        this._rovers.push(rover)

        return this._rovers;
    }

    public addRovers(rovers: Rover[]): Array<Rover> {
        if (!this._rovers) {
            this._rovers = []
        }

        this._rovers = this._rovers.concat(rovers)

        return this._rovers;
    }

    get rovers(): Array<Rover> {
        return this._rovers;
    }
}