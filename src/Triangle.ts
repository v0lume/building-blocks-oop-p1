import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        super(color, filled, [point1, point2, point3]);
    }

    toString(): string {
        const pointsString = this.points
            .map((point, index) => `v${index + 1}=${point.toString()}`)
            .join(',');

        return `Triangle[${pointsString}]`;
    }

    getType(): string {
        const distances = this.points
        .map((point, index, self) => {
            const nextIndex = index + 1 > 2 ? 0 : index + 1;

            return point.distance(self[nextIndex]);
        });

        switch (true) {
            case distances[0] === distances[1] && distances[1] === distances[2]:
                return 'equilateral triangle';
                break;

            case distances[0] === distances[1] || distances[1] === distances[2] || distances[2] === distances[1]:
                return 'isosceles triangle';
                break;

            default:
                return 'scalene triangle';
                break;
        }
    }
}
