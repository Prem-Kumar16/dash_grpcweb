const {Empty, CANSignal} = require('./autodemo_pb.js');
const {CANSignalServiceClient} = require('./autodemo_grpc_web_pb.js');

var client = new CANSignalServiceClient('http://' + window.location.hostname + ':8080',
                               null, null);

// server streaming call

const emptyRequest = new Empty();

var stream = client.streamCANSignals(emptyRequest, {});
stream.on('data', (carInfo) => {
  console.log(carInfo);
});
stream.on('error', (err) => {
  console.log(`Unexpected stream error: code = ${err.code}` +
              `, message = "${err.message}"`);
});
