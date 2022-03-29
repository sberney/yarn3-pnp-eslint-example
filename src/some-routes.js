
export function registerRoutes(app) {
  // register something
  app.get('/second', (req, res) => {
    res.send('hello second');
  });
}