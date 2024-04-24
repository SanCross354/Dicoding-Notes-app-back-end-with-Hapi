//We need to install "Nodemon" to eliminate the step of restarting the server. Just run the runner script once (npm run start)
const Hapi = require('@hapi/hapi');


const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });


    await server.start();
    console.log(`Server running on ${server.info.uri}`);
}


init();