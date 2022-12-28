const actual = require ("./arrays");

test ('En la lista no hay duplicados',  () => {
    expect(actual(employsActual)).toBe ("Manolo","Juanito","Helena","Antonio","Beatriz", "Ermenegilda","Tomasa")
 })
 test ("Nueva lista actualizada", () => {
    expect(actual(newList)).toBe ("Manolo","Juanito","Helena","Antonio","Beatriz", "Ermenegilda","Tomasa")
 })