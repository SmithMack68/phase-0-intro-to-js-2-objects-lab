const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
//Refactored
function updateEmployeeWithKeyAndValue(employee, key, value) {
   return {...employee,
    [key]: value,
   }; 
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key]= value;
    return newEmployee;
}
//delete employee.name; example

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}