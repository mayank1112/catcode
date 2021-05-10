import { updateSelectedCatsValue } from "./generalUtils"

it('should return a list containing 1 cat when new cat id is passed', () => {
    const actualValue = updateSelectedCatsValue([], '1abcd');
    const expectedValue = ['1abcd'];
    expect(actualValue).toStrictEqual(expectedValue);
})
it('should return an empty list when same cat id is passed to deselect the cat', () => {
    const actualValue = updateSelectedCatsValue(['1abcd'], '1abcd');
    const expectedValue = [];
    expect(actualValue).toStrictEqual(expectedValue);
})