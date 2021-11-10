const Employee = require('../Lib/Employee');
const Engineer = require('../Lib/Engineer');
describe('Engineer', () => {
    it('should create new Engineer extending Employee class with getGithub pointing to his github page', () => {
        const github = 'umnovjp';
        const engineer = new Engineer('John', 13, 'abc@nowhere.com', github);
        expect(engineer.Github).toEqual(github);
    });
})
describe('Engineer', () => {
    it('should return Employee role', () => { 
        const role = 'Engineer';
        const result = new Engineer('John', 13, 'abc@nowhere.com', 'umnovjp');
        expect(result.getRole()).toEqual(role)
    });
})