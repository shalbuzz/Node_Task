
/* Json fayldan istifade*/

const express = require('express');
const fs = require('fs');
const app = express();

const PORT = 3000;


const EMPLOYEES_FILE = 'employees.json';

const employees2 = [
    {
        id: 1,
        name: "John",
        age: 40
    },
    {
        id: 2,
        name: "Jack",
        age: 50
    },
    {
        id: 3,
        name: "Jammy",
        age: 34
    }
];





function getEmployees() {
    try {
        const data = fs.readFileSync(EMPLOYEES_FILE, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Faylı oxumaq mümkün olmadı:", error);
        return [];
    }
}


app.get('/', (req, res) => {
    const employees = getEmployees();
    res.json(employees);
});

app.get('/client', (req, res) => {
    res.json(employees2);
});


app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışır.`);
});





