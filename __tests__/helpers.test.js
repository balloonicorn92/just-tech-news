
const { test } = require('@jest/globals');
const {format_date, format_plural, format_url} = require('../utils/helpers')

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-30 16:12:03');

    expect(format_date(date)).toBe('3/30/2020');
})

test('format_plural() returns plural word', () => {
    const word = "tiger"
    const amount = 2
    const word2 = "lion"
    const amount2 = 1

    expect(format_plural(word, amount)).toBe("tigers")
    expect(format_plural(word2, amount2)).toBe("lion")
})

test('format_url() returns a simple url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
})