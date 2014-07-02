var kue = require('kue');

console.log('Creating queue @ ' + process.env.host + ':' + process.env.port + '...');

var jobs = kue.createQueue({
  redis: {
    port: process.env.port,
    host: process.env.host,
    auth: process.env.auth
  }
});

var port = 3000;

kue.app.listen(port, function() {
  console.log('GUI server started at port ' + port);
});

jobs.process('email', function(job, done){
  console.log('Processing job', job.id);
  done();
});