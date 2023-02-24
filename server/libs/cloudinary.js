import { v2 as cloudinary} from 'cloudinary';

cloudinary.config({
  cloud_name: "dty65fdie",
  api_key: "476495614964682",
  api_secret: "T0uJFAbt40UB4gA3HmWWvTjQcW4"
})

export const uploadImage = async filePath => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'posts'
  })
}

export const deleteImage = async id => {
  return await cloudinary.uploader.destroy(id);
}