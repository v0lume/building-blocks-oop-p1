import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(color?: string, filled?: boolean, points?: Point[]);
    constructor(color: string = 'green', filled: boolean = true, points: Point[]) {
        if (!points || points.length < 3) {
            throw new Error('Shape should be initialized with 3 points');
        }

        this.color = color;
        this.filled = filled;
        this.points = points;
    }

    toString(): string {
        const pointsString = this.points.map(point => point.toString()).join(', ');

        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${pointsString}.`;
    }

    getPerimeter(): number {
        return this.points
            .map((point, index, self) => {
                const nextIndex = index + 1 > 2 ? 0 : index + 1;

                return point.distance(self[nextIndex]);
            })
            .reduce((prev, sum) => prev + sum, 0);
    }
}
