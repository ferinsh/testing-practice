import cShift from "./caesershift.js";

test("FERIN to be HGTKP", () => {
    expect(cShift("FERIN")).toBe("HGTKP");
})

test("abcdef to be cdefgh", () => {
    expect(cShift("abcdef")).toBe("cdefgh");
})

test("uvwxyz to be wxyzab", () => {
    expect(cShift("uvwxyz")).toBe("wxyzab");
})

test("UVWXYZ to be WXYZAB", () =>{
    expect(cShift("UVWXYZ")).toBe("WXYZAB");
})