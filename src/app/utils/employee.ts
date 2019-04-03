export default class Employee {
    name: string;
    salary: number;
    isActive: boolean;

    constructor(name, salary, isActive) {
        if (salary < 0) {
            throw new RangeError('Salary is wrong');
        }

        this.name = name;
        this.salary = salary;
        this.isActive = isActive;
    }

    work() {
        return 'I am working'
    }

    deliverCode() {
        return 'I am returning code'
    }
}