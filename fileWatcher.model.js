// const chokidar = require('chokidar');
// const sendEmailAlert = require('../Config/email.config');

// let watcher;

// const startWatching = (pathToWatch) => {
//   if (watcher) {
//     watcher.close();
//   }

//   watcher = chokidar.watch(pathToWatch, {
//     ignored: /(^|[\/\\])\../, // ignore dotfiles
//     persistent: true,
//   });

//   watcher
//     .on('add', path => {
//       console.log(`File ${path} has been added`);
//       sendEmailAlert('File Added', `A new file has been added: ${path}`);
//     })
//     .on('change', path => {
//       console.log(`File ${path} has been changed`);
//       sendEmailAlert('File Changed', `A file has been changed: ${path}`);
//     })
//     .on('unlink', path => {
//       console.log(`File ${path} has been removed`);
//       sendEmailAlert('File Removed', `A file has been removed: ${path}`);
//     })
//     .on('error', error => console.log(`Watcher error: ${error}`));
// };

// const stopWatching = () => {
//   if (watcher) {
//     watcher.close();
//   }
// };


// module.exports = { startWatching, stopWatching };
// startWatching(pathToWatch);
// stopWatching(pathToWatch);
