const fs = require('fs');
const path = require('path');

const ReadFile = (rpath) => {
  rpath = (path.joinprocess.cwd(), rpath);
  console.log(rpath);
  let filenames = [];
  let fileTypes = /\.md$/; //只匹配以md结尾的文件
  fs.readdirSync(rpath).forEach(file => {
    let fullpath = rpath + "/" + file;
    let fileinfo = fs.statSync(fullpath);
    if (fileinfo.isFile()) {
      // if(file.indexOf('.md') > 0) {
      if (fileTypes.test(file) > 0) {
        if (file === 'index.md' || file === 'README.md') {
          file = '';
        } else {
          file = file.replace('.md', '');
        }
        filenames.push(file);
      }
    }
  })
  console.log(filenames);
  filenames.sort();
  return filenames;
}

const createSideBarConfig = (title, prefixPath, collapsable = true, sidebarDepth = 2) => {
  return {
    title,
    collapsable,
    children: ReadFile(prefixPath),
    sidebarDepth
  }
}

module.exports = {
  createSideBarConfig,
  ReadFile
}