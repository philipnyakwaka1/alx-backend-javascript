import { taskFirst, taskNext } from './0-constants';
test(`checks if output of taskFirst to be ${taskFirst()}`, ()=>{ 
    const result = taskFirst();
    expect(result).toBe('I prefer const when I can.');
 })
