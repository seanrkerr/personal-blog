const util = require("util");
const stream = require("stream");
const { Readable } = stream;
const pipeline = util.promisify(stream.pipeline);

const AWS = require("aws-sdk");
AWS.config.update({ region: process.env.AWS_REGION });
const s3 = new AWS.S3();

// @ts-ignore
export const handler = awslambda.streamifyResponse(
  async (event: any, responseStream: any, _context: any) => {
    const requestStream = Readable.from(
      Buffer.from(new Array(1024 * 1024).join("🚗"))
    );
    await pipeline(requestStream, responseStream);
  }
);
