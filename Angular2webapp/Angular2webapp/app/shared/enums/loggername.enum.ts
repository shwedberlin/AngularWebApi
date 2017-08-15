/**
    String Enums (also as const)
    First since Typescript 2.4 available
    Possibly not fully supported in VS yet
    Warkaround as namespace with const 
**/

//export const enum LoggerName {
//    NG_LoggerSrvc = "NG_LoggerSrvc",
//    NG_Client = "NG_Client"
//}

//export enum Color {
//    Red = "red",
//    Green = "green",
//    Blue = "blue"
//}

export namespace LOGGER_NAMES {
    export const NG_LOGGERSRVC = "NG_LOGGERSRVC";
    export const NG_CLIENT = "NG_CLIENT";
}

export namespace ADResource {
    export enum TypeEnum {
        MyFirstValue = <any>'MyFirstValue',
        MySecondValue = <any>'MySecondValue',
        MyThirdValue = <any>'MyThirdValue',
        AndSoOn = <any>'AndSoOn'
    }
}