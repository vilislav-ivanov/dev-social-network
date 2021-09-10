const Profile = require('../../model/Profile');

module.exports = (req, res) => {
  const userId = req.user.id;
  if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    res.send({ msg: 'Only image files (jpg, jpeg, png) are allowed!' });
  }
  const image = req.file.filename;

  Profile.findOne({ user: userId }).then((profile) => {
    if (profile && profile.image) {
      // remove previous image
    }
  });

  Profile.findOneAndUpdate({ user: userId }, { image: image })
    .then((profile) => res.json(profile))
    .catch((err) => console.log(err));
};
