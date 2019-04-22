var env =
{
    webPort:        process.env.PORT || 3000,
    dbHost:         process.env.DB_HOST || 'localhost',
    dbPort:         process.env.DB_PORT || '',
    dbUser:         process.env.DB_USER || '',
    dbPassword:     process.env.DB_PASSWORD || '',
    dbDatabase:     process.env.DB_DATABASE || 'Games',
    JWT_SECRET:     process.env.JWT_SECRET || 'SECRET#123',
    JWT_EXP:        process.env.JWT_EXP || '10m'
}

module.exports =
{
  //mongodb://testuser:user1test@ds145921.mlab.com:45921/games
    env: env,
    dburl: "mongodb://" + env.dbUser + ":" + env.dbPassword + "@" + env.dbHost + ":" + env.dbPort + "/" + env.dbDatabase,
    //dburl: "mongodb://localhost/" + env.dbDatabase,
    JWT_SECRET:  env.JWT_SECRET,
    JWT_EXP: env.JWT_EXP
};
