/// <reference types="mongoose/types/pipelinestage" />
import { Model } from 'mongoose';
import { Test } from 'src/test/Test';
export declare class TestService {
    private readonly TestModel;
    constructor(TestModel: Model<Test>);
    getSimilar(): Promise<any[]>;
    getAll(): Promise<(import("mongoose").Document<unknown, any, Test> & Test & {
        _id: string;
    })[]>;
    getSameCount(str1: string, str2: string): number;
    calculateLevenshteinDistance(a: string, b: string): any;
}
