const Engineer = require("../lib/engineer");

// Engineer Class / Construtor Jest test
describe("Engineer", () => {
  it("Should create an object with given parameters", () => {
    const engineer = new Engineer(
      "Grant",
      1,
      "grant@gmail.com",
      "grantsgithub"
    );
    expect(engineer).toEqual({
      _name: "Grant",
      _id: 1,
      _email: "grant@gmail.com",
      _role: "Engineer",
      _github: "grantsgithub",
    });
  });

  it("Should return name using getter", () => {
    const engineer = new Engineer(
      "Grant",
      1,
      "grant@gmail.com",
      "grantsgithub"
    );
    expect(engineer.name).toEqual("Grant");
  });

  it("Should return id using getter", () => {
    const engineer = new Engineer(
      "Grant",
      1,
      "grant@gmail.com",
      "grantsgithub"
    );
    expect(engineer.id).toEqual(1);
  });

  it("Should return email using getter", () => {
    const engineer = new Engineer(
      "Grant",
      1,
      "grant@gmail.com",
      "grantsgithub"
    );
    expect(engineer.email).toEqual("dave@gmail.com");
  });

  it("Should return role using getter", () => {
    const engineer = new Engineer(
      "Grant",
      1,
      "grant@gmail.com",
      "grantsgithub"
    );
    expect(engineer.role).toEqual("Engineer");
  });

  it("Should return github using getter", () => {
    const engineer = new Engineer(
      "Grant",
      1,
      "grant@gmail.com",
      "grantsgithub"
    );
    expect(engineer.github).toEqual("grantsgithub");
  });
});
