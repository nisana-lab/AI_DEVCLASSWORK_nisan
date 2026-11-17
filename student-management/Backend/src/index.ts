import express from 'express';
import { getStudents } from './controllers/student.controller';

const app = express();

app.use(express.json());

app.get('/students', getStudents);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
