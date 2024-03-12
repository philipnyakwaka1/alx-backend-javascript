import { taskFirst, taskNext } from '../0-constants';
test('tasks are correctly defined', () => {
    expect(`${taskFirst()} ${taskNext()}`).toEqual("I prefer const when I can. But sometimes let is okay");
  });
