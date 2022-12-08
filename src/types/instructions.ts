type Command = 'Move' | 'Left' | 'Right'

export interface Instruction {
    Command: string;
}

export const instructions: Record<Command, string> = {
    Move: "M",
    Left: "L",
    Right: "R"
}
