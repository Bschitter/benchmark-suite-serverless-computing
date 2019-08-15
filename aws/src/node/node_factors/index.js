const now = require('performance-now');
const fs = require('fs');

exports.handler = function(event, context, callback) {

  var cpuinfo = fs.readFileSync('/proc/cpuinfo', 'utf8');
  var instanceId = fs.readFileSync('/proc/self/cgroup', 'utf-8');
  var meminfo = fs.readFileSync('/proc/meminfo', 'utf8');
  var uptime = fs.readFileSync('/proc/uptime', 'utf-8');

  var n;

  if(event.queryStringParameters && event.queryStringParameters.n) {
      n = event.queryStringParameters.n;
  } else {
      n = 2688834647444046;
  }

  let start = now();
  let result = factors(n);
  let end = now();

  const res = {
    statusCode: 200,
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        success: true,
        payload: {
            'test': 'cpu test',
            'n': Number(n),
            'result': result,
            'time': Number((end-start).toFixed(3))
        },
        metrics: {
            machineId: '',
            instanceId: instanceId,
            cpu: cpuinfo,
            mem: meminfo,
            uptime: uptime
        }
    })
  };
  callback(null, res);
};

function factors(num) {
  let n_factors = [];
 
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i += 1)
    if (num % i === 0) {
      n_factors.push(i);
      if (num / i !== i) {
        n_factors.push(num / i);
      }
    }

  n_factors.sort(function(a, b){return a - b;});

  return n_factors;
}
