import { Instruction, instructions, Instructions } from "../types/instructions";
import { Position } from "../types/position";

interface IRover {
    initialPosition: Position;
    executeCommands: (instructions: Array<Instruction>) => Position;
}
export class Rover implements IRover {
    initialPosition: Position;
    instructions: Instruction[];
    executeCommands(): Position {
        return this.instructions.reduce((finalPosition, instruction): Position => {
            let position = finalPosition;
            if (instruction === Instructions.Move) {
                position = position.orientation.forward(position);
            }
            if (instruction === Instructions.Left) {
                position = position.orientation.left(position);
            }
            if (instruction === Instructions.Right) {
                position = position.orientation.right(position);
            }
            return finalPosition;
        }, { ...this.initialPosition } as Position)
    }



}