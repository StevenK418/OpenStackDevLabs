import {greet} from './greet';

describe('greet', () =>{
    it('It should include the name in the message', ()=>
    {
        expect(greet('Frank')).toContain('Frank');
    });

    it('It should not include the name in the message', ()=>
    {
        expect(greet('Jim')).not.toContain('Frank');
    });
});