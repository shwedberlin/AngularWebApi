export class ADResource {
    type?: ADResource.TypeEnum;

    name?: string;

    objecttype?: string;

    childrencount?: string;

    path?: string;

    constructor() {
        this.type = ADResource.TypeEnum.AndSoOn;
        this.name = "noname";
        this.path = "undef";
    }
}


export namespace ADResource {
    export enum TypeEnum {
        MyFirstValue = <any>'MyFirstValue',
        MySecondValue = <any>'MySecondValue',
        MyThirdValue = <any>'MyThirdValue',
        AndSoOn = <any>'AndSoOn'
    }
}
