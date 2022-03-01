const Manager = require('../lib/Manager');

jest.mock();

test("Work through the constructor", () =>{
    const tname = "Bob the builder";
    const tId = "777";
    const tEmail = "gutpunch@gmail.com"
    const tOfficeNum = "1232132"
    const tRole = "Manager";

    const obj = new Manager(tname,tId, tEmail, tOfficeNum);
    expect(obj.officeNumber).toBe(tOfficeNum);
    expect(obj.getRole()).toBe(tRole);
});