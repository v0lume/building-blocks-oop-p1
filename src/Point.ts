export class Point {
    x: number;
    y: number;

    constructor();
    constructor(x?: number, y?: number) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    distance(): number;
    distance(other?: Point): number 
    distance(x?: number | Point, y?: number): number {
        const attrX = typeof x === 'object' ? x.x : (x ?? 0);
        const attrY = typeof x === 'object' ? x.y : (y ?? 0);

        const distanceX = Math.abs(this.x - attrX);
        const distanceY = Math.abs(this.y - attrY);

        if (!distanceX && distanceY) {
            return distanceY;
        }

        if (!distanceY && distanceX) {
            return distanceX;
        }

        if (!distanceX && !distanceY) {
            return 0;
        }

        return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
    }
}
