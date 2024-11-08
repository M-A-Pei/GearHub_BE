const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'GearHub',    // The folder in Cloudinary where your files will be uploaded
    format: async (req, file) => 'jpeg', // You can specify the file format or leave it dynamic
    public_id: (req, file) => Date.now() + '_' + file.originalname.split('.')[0], // Customize public_id
  },
});

// Set up multer upload
const upload = multer({
  storage: storage
});

module.exports = upload;
