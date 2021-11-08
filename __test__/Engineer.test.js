const Engineer = require('../lib/Engineer');
describe ('Engineer', () => {
    it ('should create new Engineer extending Employee class with getGithub pointing to his github page', () => {
        const engineer = new Engineer ('umnovjp');
        expect(engineer.github).toEqual('umnovjp');
    });
describe ('returns Engineer github', () => {
    it ('should return Engineer github', () => {
        const result = new Engineer().getGithub();
        expect(result).toEqual(getGithub());
    });
});
describe ('returns Employee role', () => {
    it ('should return Employee role', () => {
        const result = new Engineer().getRole();
        expect(result).toEqual('Engineer');
    });
});
});