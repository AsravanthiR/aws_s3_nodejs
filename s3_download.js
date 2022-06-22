async function s3_download() {
  try {
    const files = await s3
      .listObjects({
        Bucket: "bucket-sravanthi",
        Prefix: "index.html",
      })
      .promise(); // can add a call to catch here if you would like to track errors

    files.Contents.forEach((file) => {
      let localFileDirectory = file.Key.substring(
        0,
        file.Key.lastIndexOf("/") + 1
      );
      if (!fs.existsSync()) {
        fs.mkdirSync(`${localFileDirectory}`, { recursive: true });
      }

      s3.getObject(
        {
          Bucket: bucket,
          Key: file.Key,
        },
        (err, data) => {
          if (err) throw new Error(err);
          else fs.createWriteStream(`${file.Key}`).write(data.Body);
        }
      );
    });
  } catch (error) {
    throw new Error(error);
  }
}
