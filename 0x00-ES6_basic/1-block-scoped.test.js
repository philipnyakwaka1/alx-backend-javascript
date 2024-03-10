import taskBlock from "./1-block-scoped" 
test('test let variables', () => {
    const result = taskBlock(true);
    expect(result).toEqual([false, true]);
})