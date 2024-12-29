declare module 'decision-tree-js' {
  export class DecisionTree {
    constructor(
      trainingData: Record<string, any>[],
      targetAttribute: string,
      features: string[],
    );

    predict(input: Record<string, any>): string;
    toJSON(): Record<string, any>;
    static fromJSON(json: Record<string, any>): DecisionTree;
  }
}
