const Image = require("../models/image");

exports.post_image = async (req, res) => {
  const { title, description, filename, path, originalName, size, user, center } = req.body;

  if (!title || !description) {
    res
      .status(400)
      .json({ msg: "The image must have a title and description" });
  }
  const newImage = await new Image({
    title,
    description,
    path,
    filename,
    originalName,
    size,
    user, 
    center,
  });
  if (!newImage) {
    res.status(400).json({ msg: "The image could not be created" });
  } else {
    return res.status(200).json({ msg: "ok", image: newImage });
  }
};

exports.get_all_CenterImages = (req, res) => {
  const codeCenter = req.params;
  if (!codeCenter) {
    return res
      .status(400)
      .json({ msg: "The code Center can not be undefined or null" });
  }
  const allImages = await Image.find({ code: codeCenter });
  if(!allImages) {
      return res.status(400).json({msg:'Could not be found center images'})
    }
  res.status(200).json({msg:'ok', allImages: allImages})

};

exports.delete_image=async(req, res)=>{
    const {code}=req.params;
    if(!code) return res.status(400).json({msg:'The code image can not be undefined or null'})

    await Image.deleteOne({code: code}, (err, deletedImage)=>{
        if(err) {
            console.log(err)
        }
        res.status(200).json({msj: 'ok'})
    })
}

exports.put_data_image=async(req, res)=>{
    const {code}=req.params
    const {title, description}=req.body
    if(!code) return res.status(400).json({msg: 'Code image could not be found'})
    await Image.findOneAndUpdate({code: code},{
        title,
        description,
    })
    res.status(200).json({msg:'ok'})
}

