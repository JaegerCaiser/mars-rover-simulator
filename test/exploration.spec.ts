import { beforeEach, describe, it } from "node:test";
import { EOL } from "os";
import { explore } from "../src/actions/exploration";
import { Rover } from '../src/models/rover.model'
import { Orientations } from "../src/types/orientation";
const lineBreak = EOL;


describe('exploration mars', () => {


    it('should report the final position', () => {
        const rightUpper = { x: 5, y: 5 }
        // const rovers: Rover[] = []

        const rover1 = new Rover();
        rover1.initialPosition = { orientation: Orientations.West, x: 1, y: 2 }
        rover1.instructions = [{ command: 'F' }, { command: 'F' }]
        const finalPosition = rover1.executeCommands()
        expect(finalPosition).
    })

})