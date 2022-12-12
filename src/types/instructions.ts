export interface Instruction {
    command: string;
}

export const instructions = [
    { command: "M" },
    { command: "L" },
    { command: "R" }
]


export const Instructions = {
    Move: instructions[0],
    Left: instructions[1],
    Right: instructions[2]
}
