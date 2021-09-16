module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Deep@123",
    DB: "TheNerdSeries",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };