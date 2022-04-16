const Engineer = require('../lib/Engineer')

test('gets name, id, email, and github of engineer', () => {
    const engineer = new Engineer ('Paul', '1234', 'example@gamil.com', 'octcat');

    expect(engineer.name).toBe('Paul');
    expect(engineer.id).toBe('1234');
    expect(engineer.email).toBe('example@gamil.com');
    expect(engineer.github).toBe('octcat')
})