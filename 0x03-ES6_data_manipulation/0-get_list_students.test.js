import getListStudents from './0-get_list_students';

describe('getListStudents function', () => {
  it('array objects', () => {
    expect.hasAssertions();
    const myArray = getListStudents();
    expect(myArray[0]).toStrictEqual({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  });
});
