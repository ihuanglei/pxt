/**
 * Events are functions that take a function (lambda) as the last argument
 */
//% color="#AA278D"
namespace language {
    /**
     * A simple event taking an function handler
     */
    //% block="on event"
    export function onEvent(handler: () => void) {

    }

    /**
     * Events can have arguments before the handler
     */
    //% block="on event with $color"
    export function onEventWithArgs(color: number, handler: () => void) {

    }

    /**
     * Event handlers can have arguments too. You can refer to them using $NAME.
     */
    //% block="on rare $handlerArg1 event"
    //% draggableParameters
    export function onEventWithHandlerArgs(handler: (handlerArg: string) => void) {

    }

    /**
     * You can mix up function argument and handler arguments for best readability,
     * Make sure to use the $ notation.
     */
    //% block="on some event $handlerArg from $arg"
    //% draggableParameters
    export function onEventWithHandlerArgsShuffle(arg: number, handler: (handlerArg: string) => void) {

    }

}