import { Injectable } from '@angular/core';

@Injectable()
export class AppStorage {
    private instanceId: string;

    constructor() {
        
    }

    setInstaceId(instanceId: string) {
        this.instanceId = instanceId;
    }

    getInstanceId(): string {
        if (!this.instanceId) return "- undef -";
        return this.instanceId;
    }
}
