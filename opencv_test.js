var cv = require('opencv4nodejs');
// open video capture
const vCap = new cv.VideoCapture('./video.mp4');
 
// read frames from capture
const frame = vCap.read();
vCap.readAsync((err, frame) => {});
 
// loop through the capture
const delay = 10;
let done = false;
while (!done) {
  let frame = vCap.read();
  // loop back to start on end of stream reached
  if (frame.empty) {
    vCap.reset();
    frame = vCap.read();
  }

  const key = cv.waitKey(delay);
  done = key !== 255;
}