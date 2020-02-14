import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import withEmotion from "./with-emotion";

CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', withEmotion(IndexPagePreview))
CMS.registerPreviewTemplate('about', withEmotion(AboutPagePreview))
CMS.registerPreviewTemplate('products', withEmotion(ProductPagePreview))
CMS.registerPreviewTemplate('blog', withEmotion(BlogPostPreview))
