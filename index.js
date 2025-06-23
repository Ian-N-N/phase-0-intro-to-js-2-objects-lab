// Initializing employee object 
let employee = {
  name: "Njuguna",              // value in quotes because it is a string
  streetAddress: "1467, Ruiru"
};

// 1. Non-destructive update: returns a new object
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// 2. Destructive update: modifies the original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 3. Non-destructive delete: returns a new object without the key
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// 4. Destructive delete: modifies the original object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// === Test the functions ===
console.log("1. updateEmployeeWithKeyAndValue:");
console.log(updateEmployeeWithKeyAndValue(employee, "name", "Ian"));
// Original employee remains unchanged
console.log("Original employee after non-destructive update:");
console.log(employee);

console.log("\n2. destructivelyUpdateEmployeeWithKeyAndValue:");
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Dev Blvd"));
// employee object is now changed
console.log("Modified employee:");
console.log(employee);

console.log("\n3. deleteFromEmployeeByKey:");
console.log(deleteFromEmployeeByKey(employee, "name"));
// Original employee still has 'name'
console.log("Original employee after non-destructive delete:");
console.log(employee);

console.log("\n4. destructivelyDeleteFromEmployeeByKey:");
console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress"));
// employee object is now changed
console.log("Modified employee after destructive delete:");
console.log(employee);