const childProcess = require('child_process');
const path = require('path');

module.exports.setupLayer = () => {
  const layerDir = path.join(__dirname, '..', '..', 'layer', 'nodejs');
  childProcess.execSync(`npm install ${layerDir} --prefix ${layerDir} --production`, {
    shell: 'bash'
  });
}
