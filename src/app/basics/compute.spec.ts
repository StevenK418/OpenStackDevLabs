import { compute } from "./compute";

describe ('compute', () => 
{

    //Checks if the result returned is negative
    it('should return 0 if the input is negative', () =>
    {
        const result = compute(-1);
        expect(result).toBe(0);
    });

    //Checks if the result returned is positive
    it("should return input+1 if the input is positive", () => {
        const result = compute(1);
        expect(result).toBe(2);
    });

    //Checks if the result is greater than the value input
    it("Should return true if value returned is greater than expected result", () => {
        const result = compute(1);
        expect(result).toBeGreaterThan(1);
    });

    //Checks if the result is Less than the value input
    it("Should return true if value returned is Less than expected result", () => {
        const result = compute(1);
        expect(result).toBeLessThan(3);
    });
});