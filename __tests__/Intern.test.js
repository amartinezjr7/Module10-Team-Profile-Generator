const Intern = require('../lib/Intern');

jest.mock();

test("Work through the constructor", () =>{
    const tname = "Bob the builder";
    const tId = "777";
    const tEmail = "gutpunch@gmail.com"
    const tSchool = "Manly University";
    const tRole = "Intern";

    const obj = new Intern(tname,tId, tEmail, tSchool);
    expect(obj.school).toBe(tSchool);
    expect(obj.getRole()).toBe(tRole);
});