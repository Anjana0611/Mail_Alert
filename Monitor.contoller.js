// const chokidar = require('chokidar');
// const path = require('./cal.controller')

// exports.email_alert = async (req,res) => {

//   console.log('HI',req)
// //chokidar is a package for watching files and directories.
// const filepath = '../controllers//cal.controller.js';

//     const watcher = chokidar.watch(filepath, {
//         persistent: true
//       });

//       watcher
//       .on('ready', () => console.log('Initial scan complete. Ready for changes'))
//         .on('add', path => console.log(`File added: ${filepath}`))
//         .on('change', path => console.log(`File changed: ${filepath}`))
//         .on('unlink', path => console.log(`File removed: ${filepath}`))
//         .on('error', error => console.log(`Watcher error: ${error}`));






//          //res.send("Hello")
// }


// const chokidar = require('chokidar');

// exports.email_alert = async (req, res) => {
//   console.log('Request received:', req.body);

//   // Path to the file you want to watch
//   const filepath = '../controllers/cal.controller.js';

//   // Initialize the watcher for the specified file
//   const watcher = chokidar.watch(filepath, {
//     persistent: true, // Keep watching even after the initial scan
//   });

//   // Watch for add, change, and unlink (delete) events
//   watcher
//     .on('ready', () => console.log('Initial scan complete. Ready for changes'))
//     .on('add', (path) => console.log(`File added: ${path}`))
//     .on('change', (path) => console.log(`File changed: ${path}`))
//     .on('unlink', (path) => console.log(`File removed: ${path}`))
//     .on('error', (error) => console.log(`Watcher error: ${error}`));

//   // Send a response to the client
//   res.status(200).send('File watcher is set up and running');
// };
const chokidar = require('chokidar');

exports.email_alert = async (req, res) => {
  // Get the filepath from the request body
  const filepath = './cal.controller';
  //const filepath = req.body.filepath;

  if (!filepath) {
    return res.status(400).send('File path is required');
  }

  console.log(`Watching for changes on: ${filepath}`);

  // Initialize the watcher for the specified file
  const watcher = chokidar.watch(filepath, {
    persistent: true,
    usePolling: true,    // Optional: Use polling (helps in some environments)
    interval: 100,       // Optional: Set polling interval (in milliseconds)
    awaitWriteFinish: {  // Optional: Stability threshold
      stabilityThreshold: 2000,
      pollInterval: 100
    },
    depth: 0,            // Optional: Depth level of the directory structure to watch
    ignoreInitial: false, // Optional: Ignore adding existing files initially
    ignorePermissionErrors: false, // Optional: Ignore permission errors
    atomic: true,        // Optional: Wait for file write operations to complete before triggering events
    alwaysStat: true,    // Optional: Always stat (call fs.stat) for every event
    ignored: /(^|[\/\\])\../ // Optional: Ignore dotfiles (hidden files)
  });

  // Watch for add, change, and unlink (delete) events
  watcher
    .on('ready', () => console.log('Initial scan complete. Ready for changes'))
    .on('add', (filepath) => console.log(`File added: ${filepath}`))
    .on('change', (path) => console.log(`File changed: ${filepath}`))
    .on('unlink', (path) => console.log(`File removed: ${filepath}`))
    .on('error', (error) => console.log(`Watcher error: ${error}`));

  // Send a response to the client
  // res.status(200).send(`Watching for changes on: ${filepath}`);
};
