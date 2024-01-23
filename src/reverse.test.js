import reverse from './reverse.js';

test('hi', () => {
    expect(reverse('hi')).toBe('ih');
})

test('BYE', () => {
    expect(reverse('BYE')).toBe('EYB');
})