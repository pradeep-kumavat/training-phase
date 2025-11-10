function parseEmployees(employeeStrings) {
  return employeeStrings.map(employeeStr => {
    const [name, age, department, salary] = employeeStr.split(',');
    
    return {
      name: name.trim(),
      age: parseInt(age.trim()),
      department: department.trim(),
      salary: parseInt(salary.trim())
    };
  });
}

//merge karne ke baad conflict aa sakta hai isliye alag function me likha hai
function getEmployeesByDept(dept, employees) {
  return employees.filter(emp => 
    emp.department.toLowerCase() === dept.toLowerCase()
  );
}

function getAverageSalary(employees) {
  if (employees.length === 0) return 0;
  
  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
  return totalSalary / employees.length;
}

function getHighEarners(minSalary, employees) {
  return employees.filter(emp => emp.salary > minSalary);
}   

const employees = [
  "Amit,28,Engineering,75000",
  "Priya,32,Marketing,68000",
  "Rohan,24,Engineering,50000",
  "Neha,29,HR,45000",
  "Karan,35,Marketing,82000"
];

const parsedEmployees = parseEmployees(employees);
console.log('Parsed Employees:', parsedEmployees);

const getEmp = getEmployeesByDept('Engineering', parsedEmployees);
console.log('Engineering Employees:', getEmp);

const avgSalary = getAverageSalary(parsedEmployees);
console.log('Average Salary:', avgSalary);

const highEarners = getHighEarners(70000, parsedEmployees);
console.log('High Earners:', highEarners);
