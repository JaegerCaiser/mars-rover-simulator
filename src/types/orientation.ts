import { Position } from "./position";

export interface Orientation {
    forward: (position: Position) => Position;
    right: (position: Position) => Position;
    left: (position: Position) => Position;
    heading: string;
};

export const orientations = [
    {
        forward: (position: Position) => {
            position.y++;
            return position;
        },
        right: (position: Position) => {
            position.orientation = Orientations.East;
            return position;
        },
        left: (position: Position) => {
            position.orientation = Orientations.West;
            return position;
        },
        heading: 'N'
    },
    {
        forward: (position: Position) => {
            position.y--;
            return position;
        },
        right: (position: Position) => {
            position.orientation = Orientations.West;
            return position;
        },
        left: (position: Position) => {
            position.orientation = Orientations.East;
            return position;
        },
        heading: 'S'
    },
    {
        forward: (position: Position) => {
            position.x++;
            return position;
        },
        right: (position: Position) => {
            position.orientation = Orientations.South;
            return position;
        },
        left: (position: Position) => {
            position.orientation = Orientations.North;
            return position;
        },
        heading: 'E'
    },
    {
        forward: (position: Position) => {
            position.x--;
            return position;
        },
        left: (position: Position) => {
            position.orientation = Orientations.South;
            return position;
        },
        right: (position: Position) => {
            position.orientation = Orientations.North;
            return position;
        },
        heading: 'W'
    }
];
export const Orientations = {
    North: orientations[0],
    South: orientations[1],
    East: orientations[2],
    West: orientations[3]
};