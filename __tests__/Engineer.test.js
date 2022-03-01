const Engineer = require('../lib/Engineer');

jest.mock();

test("Work through the constructor", () =>{
    const tname = "Bob the builder";
    const tId = "777";
    const tEmail = "gutpunch@gmail.com"
    const tGithub = "supertechdudeguyman";
    const tRole = "Engineer";

    const obj = new Engineer(tname,tId, tEmail, tGithub);
    expect(obj.github).toBe(tGithub);
    expect(obj.getRole()).toBe(tRole);
});