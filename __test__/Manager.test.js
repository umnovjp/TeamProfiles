const Employee = require('../Lib/Employee')
const Manager = require('../Lib/Manager')

describe('Manager', () => {
    it('should create new Manager extending Employee class with officeNumber pointing to his office Number', () => {
        const officeNumber = '12345';
        const manager = new Manager('Jo3 Bid3n', 12, 'Jo3Bid3n@gmail.com', officeNumber);
        expect(manager.officeNumber).toEqual(officeNumber);
    });
})
describe('Manager', () => {
    it('returns Employee role', () => {
        const role = 'Manager';
        const result = new Manager('Jo3 Bid3n', 12, 'Jo3Bid3n@gmail.com', '12345');
        expect(result.getRole()).toEqual(role);
    });
})