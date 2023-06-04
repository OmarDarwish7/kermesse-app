/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
import { TestService } from './test.service';
export declare class TestController {
    private testService;
    constructor(testService: TestService);
    getAll(): Promise<(import("mongoose").Document<unknown, any, import("./Test").Test> & import("./Test").Test & {
        _id: string;
    })[]>;
    getSimilar(): Promise<any[]>;
}
