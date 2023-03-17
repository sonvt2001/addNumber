
const addNum = require("./index.js");

describe('addNum', () => {
  test('sum', () => {
    const mbn = new addNum();
    
    // Test với các số không có nhớ
    expect(mbn.sum("1234", "5678")).toBe("6912");
    expect(mbn.sum("999", "1")).toBe("1000");
    expect(mbn.sum("0", "0")).toBe("0");
    
    // Test với các số có nhớ
    expect(mbn.sum("9999", "1")).toBe("10000");
    expect(mbn.sum("123", "987")).toBe("1110");
    expect(mbn.sum("888", "222")).toBe("1110");
    
    // Test với số âm
    expect(() => mbn.sum("-123", "456")).toThrow(Error);
    expect(() => mbn.sum("123", "-456")).toThrow(Error);
    expect(() => mbn.sum("-123", "-456")).toThrow(Error);
    expect(() => mbn.sum("123", "-0001")).toThrow(Error);
    
    // Test với các chuỗi không phải số
    expect(() => mbn.sum("1234", "abcd")).toThrow(Error);
    expect(() => mbn.sum("1234", "123,456")).toThrow(Error);
    expect(() => mbn.sum("1234", "12-34")).toThrow(Error);
    expect(() => mbn.sum("1234", "1.234")).toThrow(Error);
  });
});