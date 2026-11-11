import https from 'https';

const payload = JSON.stringify({
  host: 'sunnatillasharipov.uz',
  key: 'b8f419c8d5a74e32906e3e5d71c42901',
  keyLocation: 'https://sunnatillasharipov.uz/b8f419c8d5a74e32906e3e5d71c42901.txt',
  urlList: ['https://sunnatillasharipov.uz/']
});

let pending = 2;

function checkDone() {
  pending--;
  if (pending <= 0) {
    process.exit(0);
  }
}

function sendIndexNow(endpoint, hostName) {
  const options = {
    hostname: hostName,
    path: endpoint,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(options, (res) => {
    console.log(`[${hostName}] Status: ${res.statusCode} ${res.statusMessage}`);
    res.resume();
    res.on('end', checkDone);
  });

  req.on('error', (e) => {
    console.error(`[${hostName}] Error: ${e.message}`);
    checkDone();
  });

  req.write(payload);
  req.end();
}

console.log('Sending IndexNow push notification for sunnatillasharipov.uz...');
sendIndexNow('/indexnow', 'api.indexnow.org');
sendIndexNow('/indexnow', 'www.bing.com');
