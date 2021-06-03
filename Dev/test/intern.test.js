const Intern = require("../lib/intern");

describe("Intern", () => {
  it("Should create an object with given parameters", () => {
    const intern = new Intern("Grant", 1, "grant@gmail.com", "School");
    expect(intern).toEqual({
      _name: "Grant",
      _id: 1,
      _email: "grant@gmail.com",
      _role: "Intern",
      _school: "School",
    });
  });

  it("Should return name using getter", () => {
    const intern = new Intern("Grant", 1, "grant@gmail.com", "School");
    expect(intern.name).toEqual("Grant");
  });

  it("Should return id using getter", () => {
    const intern = new Intern("Grant", 1, "grant@gmail.com", "School");
    expect(intern.id).toEqual(1);
  });

  it("Should return email using getter", () => {
    const intern = new Intern("Grant", 1, "grant@gmail.com", "School");
    expect(intern.email).toEqual("grant@gmail.com");
  });

  it("Should return role using getter", () => {
    const intern = new Intern("Grant", 1, "grant@gmail.com", "School");
    expect(intern.role).toEqual("Intern");
  });

  it("Should return school using getter", () => {
    const intern = new Intern("Grant", 1, "grant@gmail.com", "School");
    expect(intern.school).toEqual("School");
  });
});
