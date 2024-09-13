// const { startWatching, stopWatching } = require('../models/fileWatcher.model');
// const pathToWatch= '../controllers';
// const startWatchController = (req, res) => {

//     watcher = chokidar.watch(pathToWatch, {
//         ignored: /(^|[\/\\])\../, // ignore dotfiles
//         persistent: true,
//       });
    
//   if (!pathToWatch) {
//     return res.status(400).json({ message: 'Path to watch is required' });
//   }

//   startWatching(pathToWatch);
//   return res.status(200).json({ message: `Started watching for changes in ${pathToWatch}` });
// };

// const stopWatchController = (req, res) => {
//   stopWatching();
//   return res.status(200).json({ message: 'Stopped watching for changes' });
// };

// module.exports = { startWatchController, stopWatchController };