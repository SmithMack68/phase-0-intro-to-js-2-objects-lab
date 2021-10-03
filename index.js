const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]= value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key]= value;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;
    return employee;
}