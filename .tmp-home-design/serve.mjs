import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, sep } from 'node:path';
const root = fileURLToPath(new URL('./', import.meta.url));
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.png':'image/png'};
createServer(async (req,res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const path = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!path.startsWith(root.endsWith(sep) ? root : root + sep) || !types[extname(path)]) { res.writeHead(404).end(); return; }
    res.writeHead(200,{'Content-Type':types[extname(path)],'Cache-Control':'no-store'});
    res.end(await readFile(path));
  } catch { res.writeHead(404).end(); }
}).listen(4322,'127.0.0.1',() => console.log('Temporary design comparison: http://127.0.0.1:4322/'));
