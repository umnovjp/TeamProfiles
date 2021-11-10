const Employee = require('../Lib/Employee')
const Intern = require('../Lib/Intern')
describe('Intern', () => {
    it('should create new Intern extending Employee class with school pointing to his school', () => {
        const school = 'Mipt.ru';
        const intern = new Intern('Ronald Tramp', 14, 'abc@nowhere.com', school);
        expect(intern.school).toEqual(school);
    });
})
describe('Intern', () => {
    it('returns Intern role', () => {
        const role = 'Intern';
        const result = new Intern('Ronald Tramp', 14, 'abc@nowhere.com', 'Mipt.ru');
        expect(result.getRole()).toEqual(role);
    });
})