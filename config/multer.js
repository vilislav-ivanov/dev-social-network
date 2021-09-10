const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './');
  },
  filename: function (req, file, cb) {
    // const ext = file.mimetype.split('/')[1];
    cb(null, `uploads/${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

module.exports = upload;
