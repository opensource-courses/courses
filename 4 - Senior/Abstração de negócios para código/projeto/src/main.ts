import User from "./auth/entities/User";

function main() {
  const userFails = User.create("Matheus", "matheus@dev.com", "senha");

  const userSuccess = User.create(
    "Matheus Costa",
    "matheus@dev.edu",
    "senha@dev"
  );

  console.log(userFails, userSuccess);
}

main();
