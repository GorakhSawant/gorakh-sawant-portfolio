const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

const s3 = new AWS.S3({
  region: 'your-region',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const uploadDir = function(s3Path, bucketName) {
  fs.readdirSync(s3Path).forEach(function(filePath) {
    const bucketPath = path.join(s3Path, filePath);
    if (fs.lstatSync(bucketPath).isDirectory()) {
      uploadDir(bucketPath, bucketName);
    } else {
      uploadFile(bucketPath, bucketName);
    }
  });
};

const uploadFile = function(filePath, bucketName) {
  const fileStream = fs.createReadStream(filePath);
  const bucketPath = filePath.replace('build/', '');
  
  const params = {
    Bucket: bucketName,
    Key: bucketPath,
    Body: fileStream,
    ContentType: getContentType(filePath)
  };

  s3.upload(params, function(err, data) {
    if (err) console.log(err);
    console.log(`Successfully uploaded ${filePath}`);
  });
};

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };
  return types[ext] || 'application/octet-stream';
}

// Usage
uploadDir('build/', 'your-bucket-name'); 