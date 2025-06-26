interface IEmployee {
  id: number;
  fname: string;
  lname: string;
  age: number;
  salary: number;
  address: {
    city: string;
    street: string;
    zCode: string;
  };
}

class Employee implements IEmployee {
  constructor(
    public id: number,
    public fname: string,
    public lname: string,
    public age: number,
    public salary: number,
    public address: { city: string; street: string; zCode: string }
  ) {}
  getSalary(): number {
    return this.salary;
  }
}

const emp1 = new Employee(101, "Ali", "Hassan", 28, 7000, {
  city: "Cairo",
  street: "Nasr City",
  zCode: "11765",
});

console.log(emp1.getSalary());

// part 3
class Manager extends Employee {
  employees: Employee[] = [];

  constructor(
    id: number,
    fname: string,
    lname: string,
    age: number,
    salary: number,
    address: { city: string; street: string; zCode: string },
    employees: Employee[] = []
  ) {
    super(id, fname, lname, age, salary, address);
    this.employees = employees;
  }

  showEmployeeData(empId: number): void {
    const emp = this.employees.find((e) => e.id === empId);
    if (emp) {
      console.log(`ID: ${emp.id}`);
      console.log(`Name: ${emp.fname} ${emp.lname}`);
      console.log(`Age: ${emp.age}`);
      console.log(`Salary: ${emp.salary}`);
      console.log(
        `Address: ${emp.address.city}, ${emp.address.street}, ${emp.address.zCode}`
      );
    } else {
      console.log(`Employee with ID ${empId} not found.`);
    }
  }
}

// 34an n run

const emp2 = new Employee(102, "Sara", "Mohamed", 30, 8000, {
  city: "Giza",
  street: "Dokki",
  zCode: "12345",
});

const emp3 = new Employee(103, "Omar", "Khaled", 35, 9000, {
  city: "Alex",
  street: "Stanley",
  zCode: "54321",
});
const manager = new Manager(
  200,
  "Mostafa",
  "Manager",
  45,
  15000,
  {
    city: "Cairo",
    street: "Masr Gedida",
    zCode: "00000",
  },
  [emp1, emp2, emp3]
);

console.log("Manager Salary:", manager.getSalary());

console.log("\nShow Employee with ID 102:");
manager.showEmployeeData(102);

// 7d m4 mwgood

console.log("\nShow Employee with ID M4 mwgoood");
manager.showEmployeeData(122);
