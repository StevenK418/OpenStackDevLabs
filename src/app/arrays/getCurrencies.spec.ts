import { getCurrencies } from "./getCurrencies";

describe('getCurrencies', () =>{
    
    //Check for US Dollars in array
    it('It should include US Dollars currency', ()=>
    {
        const result = getCurrencies();
        expect(result).toContain('USD');
    });

    //Check for Ponds Sterling in array
    it('It should include Pounds Sterling currency', ()=>
    {
        const result = getCurrencies();
        expect(result).toContain('GBP');
    });

     //Check for Euro currency in array
     it('It should include Euro currency', ()=>
     {
         const result = getCurrencies();
         expect(result).toContain('EUR');
     });

    //Check for Canadian dollar currency in array
    it('It should not include Canadian currency', ()=>
    {
        const result = getCurrencies();
        expect(result).not.toContain('CAD');
    });
});