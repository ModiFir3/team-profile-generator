const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test("gets name, id, and email of the employee", () => {
    const employee = new Employee('Paul', '1234', 'example@gamil.com');

    expect(employee.name).toBe('Paul');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('example@gamil.com')
});