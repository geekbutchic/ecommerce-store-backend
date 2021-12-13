import bcrypt from "bcryptjs";

//FOR SEEDING PURPOSES 
const users = [
  {
    name: "Admin User",
    email: "admin@nero.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Jennifer Distefano",
    email: "tom@nero.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "Tom Distefano",
    email: "jennifer@nero.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

export default users;
