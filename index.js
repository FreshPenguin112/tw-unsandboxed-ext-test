(function(Scratch) {
  'use strict';
  const ArgumentType = require('../../extension-support/argument-type');
  const BlockType = require('../../extension-support/block-type');
  const vm = Scratch.vm;
  class SomeBlocks {
    constructor (runtime) {
        //cq: ignore
        //ext stuff
        this.runtime = runtime;
        this.menuIconURI = null;
        this.blockIconURI = null;
        this.colorScheme = ["#41e2d0", "#0DA57A"];
    }
    getInfo () {
        return {
            id: 't',
            name: 't',
            blockIconURI: this.blockIconURI,
            menuIconURI: this.menuIconURI,
            color1: this.colorScheme[0],
            color2: this.colorScheme[1],
            blocks: [
                {
                    opcode: 'tm',
                    blockType: BlockType.COMMAND,
                    text: 'set turbomode {onoff}',
                    arguments: {
                        onoff: {
                            type: ArgumentType.BOOLEAN,
                            defaultValue: 'True'
                        }
                    }
                }
            ]
        };
    }
    tm(args) {
    vm.setTurboMode(args.onoff)
    }
}
  Scratch.extensions.register(new t());
})(Scratch);
