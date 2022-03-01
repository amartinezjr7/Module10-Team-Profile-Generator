const Employee = require('../lib/Employee');

jest.mock();

test('Can set a name via the constructor', () =>{
    const name = 'Jerry';
    const obj = new Employee(name);
    expect(obj.name).toBe(name);
})