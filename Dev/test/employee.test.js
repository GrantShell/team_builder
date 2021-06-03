const Employee = require("../lib/employee");

describe("Employee", () => {
  it("Should create an object with given parameters", () => {
    const employee = new Employee("Grant", 1, "grant@gmail.com");
    expect(employee).toEqual({
      _name: "Grant",
      _id: 1,
      _email: "grant@gmail.com",
      _role: "Employee",
    });
  });

  it("Should return name using getter", () => {
    const employee = new Employee("Grant", 1, "grant@gmail.com");
    expect(employee.name).toEqual("Grant");
  });

  it("Should return id using getter", () => {
    const employee = new Employee("Grant", 1, "grant@gmail.com");
    expect(employee.id).toEqual(1);
  });

  it("Should return email using getter", () => {
    const employee = new Employee("Grant", 1, "grant@gmail.com");
    expect(employee.email).toEqual("dave@gmail.com");
  });

  it("Should return role using getter", () => {
    const employee = new Employee("Grant", 1, "grant@gmail.com");
    expect(employee.role).toEqual("Employee");
  });
});
