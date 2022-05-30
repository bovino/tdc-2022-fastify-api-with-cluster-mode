const fastify = require('fastify')();
const port = 8123;

fastify.get('/usuarios', (req, res) => {
  console.log(' GET REQUEST recebida em ' + new Date().toISOString());
  res.send('Hello World Rota GET!');
});
fastify.listen(port, () => {
  console.log(`Fastify "Hello World" listening on port ${port}, PID: ${process.pid}`);
});