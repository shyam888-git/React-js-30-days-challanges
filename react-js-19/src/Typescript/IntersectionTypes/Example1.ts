type Employee = {
    id: number;
    name: string;
}

type Manager = {
    id: number;
    name: string
    department: string;
}

type ManagerWithEmployeeInfo = Employee & Manager;
const Manager: ManagerWithEmployeeInfo = {
    id: 123,
    name: "Shyam",
    department: "Engineering"
}

console.log(Manager.department);