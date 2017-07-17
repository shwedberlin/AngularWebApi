import { Injectable } from '@angular/core';

/**
 * App storage service
 */
@Injectable()
export class AppStorage {
    private instanceId: string;

    /**
     * Constructor
     */
    constructor() {
        console.info("App storage constructor called");
    }

    /**
     * Set Instance Id
     * @param instanceId
     */
    setInstaceId(instanceId: string) {
        this.instanceId = instanceId;
    }

    /**
     * Get Instance Id
     */
    getInstanceId(): string {
        if (!this.instanceId) return "- undef -";
        return this.instanceId;
    }
}
