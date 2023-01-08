const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (admin, email, firstname, lastname, login, city, hashedPassword ) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.admin,
        user.email,
        user.firstname,
        user.lastname,
        user.login,
        user.city,
        user.hashedPassword,
      ]
    );
  }

  verifyEmailAndPasswordAndNext(email) {
    return this.connection.query(
      `select id, hashedPassword from ${this.table} where email = ?`,
      [email]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set admin = ?, email = ?, firstname = ?, lastname = ?, login = ?, city = ? where id = ?`,
      [
        user.admin,
        user.email,
        user.firstname,
        user.lastname,
        user.login,
        user.city,
        user.id,
      ]
    );
  }
}

module.exports = UsersManager;
