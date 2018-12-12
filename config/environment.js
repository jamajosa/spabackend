// Environment variabelen.
var env =
{
    webPort:        process.env.PORT || 3000,
    dbHost:         process.env.DB_HOST || 'localhost',
    dbPort:         process.env.DB_PORT || '',
    dbUser:         process.env.DB_USER || '',
    dbPassword:     process.env.DB_PASSWORD || '',
    dbDatabase:     process.env.DB_DATABASE || 'tools'
}

var dburl = process.env.NODE_ENV === 'production' ?
    'mongodb://' + env.dbUser + ':' + env.dbPassword + '@' + env.dbHost + ':' + env.dbPort + '/' + env.dbDatabase :
    'mongodb://localhost/' + env.dbDatabase

module.exports =
{
    env: env,
    dburl: 'mongodb://localhost/gamedb'
    //"mongodb://" + env.dbUser + ":" + env.dbPassword + "@ds029585.mlab.com:29585/mongodb_project"
};

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
