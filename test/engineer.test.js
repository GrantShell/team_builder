const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
  const engineer = new Engineer(
    "John Doe ",
    "111",
    "john@mail.com",
    "johndoegit"
  );

  expect(engineer.name).toBe("John Doe");
  expect(engineer.id).toBe("111");
  expect(engineer.email).toBe("john@mail.com");
  expect(engineer.github).toBe("johndoegit");
});

test("gets engineer's github username", () => {
  const engineer = new Engineer("John Doe", "111", "bob@bob.com", "johndoegit");

  expect(engineer.getGithub()).toEqual(expect.stringContaining("johndoegit"));
});

test("gets engineer's role", () => {
  const engineer = new Engineer(
    "John Doe",
    "111",
    "john@mail.com",
    "johndoegit"
  );

  expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
});
