const Manager = require("../lib/manager");

describe("Manager", () => {
  it("Should create an object with given parameters", () => {
    const manager = new Manager("Grant", 1, "grant@gmail.com", 123);
    expect(manager).toEqual({
      _name: "Grant",
      _id: 1,
      _email: "grant@gmail.com",
      _role: "Manager",
      _officeNumber: 123,
    });
  });

  it("Should return name using getter", () => {
    const manager = new Manager("Grant", 1, "grant@gmail.com", 123);
    expect(manager.name).toEqual("Grant");
  });

  it("Should return id using getter", () => {
    const manager = new Manager("Grant", 1, "grant@gmail.com", 123);
    expect(manager.id).toEqual(1);
  });

  it("Should return email using getter", () => {
    const manager = new Manager("Grant", 1, "grant@gmail.com", 123);
    expect(manager.email).toEqual("grant@gmail.com");
  });

  it("Should return role using getter", () => {
    const manager = new Manager("Grant", 1, "grant@gmail.com", 123);
    expect(manager.role).toEqual("Manager");
  });

  it("Should return office number using getter", () => {
    const manager = new Manager("Grant", 1, "grant@gmail.com", 123);
    expect(manager.officeNumber).toEqual(123);
  });
});
