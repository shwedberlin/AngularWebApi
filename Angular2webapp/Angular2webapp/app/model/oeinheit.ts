import * as models from './models';

export class OEinheit {
    iD?: number;

    deviceCollectionID?: string;

    hOEID?: number;

    name?: string;

    children?: Array<models.OEinheit>;

}