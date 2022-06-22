import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client.js";
// Set the bucket parameters.

export const bucketParams = { Bucket: "bucket-sravanthi" };

// Create the Amazon S3 bucket.
export const run = async () => {
  try {
    const data = await s3Client.send(new CreateBucketCommand(bucketParams));
    console.log("Success", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();
