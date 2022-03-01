const Employee = require('../lib/Employee');

jest.mock();

test('Can set a name via the constructor', () =>{
    const tName = 'Jerry';
    const tId = '748';
    const tEmail = 'blahblah@gmail.com';
    const obj = new Employee(tName, tId, tEmail);
    expect(obj.name).toBe(tName);
    expect(obj.id).toBe(tId);
    expect(obj.email).toBe(tEmail);

})