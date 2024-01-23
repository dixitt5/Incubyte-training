export namespace Transportation {
    export interface Vehicle {
        pos: [number, number];
        forward(): void;
        backward(): void;
    }    
}