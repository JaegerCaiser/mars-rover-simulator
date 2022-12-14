import { Coordinate } from "../types/coordinate"
import { Instruction, instructions } from "../types/instructions"
import { orientations } from "../types/orientation"
import { Position } from "../types/position"

export const parseCoordinate = (properties: Array<string>): Coordinate => {
    return { x: Number(properties[0]), y: Number(properties[1]) }
}

export const parseStatingPosition = (properties: Array<string>): Position => {
    let startingPosition = <Position>parseCoordinate(properties)
    const orientation = orientations.find(orientation => orientation.heading === properties[2])
    if (!orientation) {
        throw new Error('Invalid initial orientation passed')
    }

    startingPosition.orientation = orientation

    return startingPosition
}

export const parseInstructions = (commands: Array<string>): Array<Instruction> => {
    return commands.map(command => {
        return instructions.filter((instruction) => instruction.command === command)[0]
    })
}