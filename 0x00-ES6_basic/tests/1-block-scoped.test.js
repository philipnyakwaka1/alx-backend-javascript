import taskBlock from "../1-block-scoped" 
test('test let variables', () => {
    expect(taskBlock(true)).toEqual([false, true]);
    expect(taskBlock(false)).toEqual([false, true]);
})