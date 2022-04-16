const Intern = require('../lib/Intern');

test('gets name, id, email, and school of Intern', () => {
    const intern = new Intern('Paul', '1234', 'example@gamil.com', 'school');

    expect(intern.name).toBe('Paul');
    expect(intern.id).toBe('1234');
    expect(intern.email).toBe('example@gamil.com');
    expect(intern.school).toBe('school');
})