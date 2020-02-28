import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PlayPagePreview from './preview-templates/PlayPagePreview'
import withEmotion from "./with-emotion";

CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', withEmotion(IndexPagePreview))
CMS.registerPreviewTemplate('about', withEmotion(AboutPagePreview))
CMS.registerPreviewTemplate('blog', withEmotion(BlogPostPreview))
CMS.registerPreviewTemplate('play', withEmotion(PlayPagePreview))
