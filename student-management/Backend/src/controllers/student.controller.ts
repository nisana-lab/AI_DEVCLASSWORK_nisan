import { Request, Response } from 'express';

export function getStudents(req: Request, res: Response) {
    const students = [
        { id: 1, name: 'Alice', grades: [85, 90, 78] },
        { id: 2, name: 'Bob', grades: [65, 70, 80] },
        { id: 3, name: 'Charlie', grades: [90, 85, 95] }
    ];

    res.json(students);
}
