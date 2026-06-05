const bcrypt = require("bcryptjs");
const readline = require("readline");

const db = require("../src/config/db");
const User = require("../src/models/User");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (q) =>
  new Promise((resolve) => rl.question(q, resolve));

const insertAdmin = async () => {
  try {
    await db();
    const name = await question("Admin Name: ");
    const email = await question("Admin Email: ");
    const password = await question("Admin Password: ");

    const existingAdmin = await User.findOne({ email });

    if (existingAdmin) {
      console.log("Admin already exists with this email.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      role: "Admin",
      status: "Active",
    });

    console.log("✅ Admin created successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
};

insertAdmin();