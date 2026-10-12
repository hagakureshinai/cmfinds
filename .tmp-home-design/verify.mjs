import { spawn } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
const out = join(process.cwd(), '.tmp-home-design');
const expected = JSON.parse(await readFile(join(out,'articles.json'),'utf8'));
const chrome = spawn('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless','--disable-gpu','--no-first-run','--remote-debugging-port=9334',`--user-data-dir=${process.env.TEMP}/CMFinds-home-preview-chrome`, 'about:blank'], {windowsHide:true,stdio:'ignore'});
let socket;
try {
  let target;
  for(let i=0;i<60;i++) { try { target=(await (await fetch('http://127.0.0.1:9334/json')).json()).find(t=>t.type==='page'); if(target)break; } catch{} await new Promise(r=>setTimeout(r,200)); }
  if(!target)throw new Error('Chrome debugging endpoint did not start');
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r=>socket.addEventListener('open',r,{once:true}));
  let id=0;const pending=new Map();
  socket.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);clearTimeout(p.timer);m.error?p.reject(m.error):p.resolve(m.result);}});
  const send=(method,params={})=>new Promise((resolve,reject)=>{const key=++id;const timer=setTimeout(()=>{pending.delete(key);reject(new Error(`Timeout: ${method}`));},15000);pending.set(key,{resolve,reject,timer});socket.send(JSON.stringify({id:key,method,params}));});
  const evaluate=async expression=>(await send('Runtime.evaluate',{expression,returnByValue:true})).result.value;
  await send('Page.enable');
  async function navigate(url) {
    await send('Page.navigate',{url});
    for(let i=0;i<50;i++){if(await evaluate(`document.readyState==='complete' && location.href===${JSON.stringify(url)}`))return;await new Promise(r=>setTimeout(r,100));}
    throw new Error('Navigation did not complete');
  }
  const report=[];
  for(const width of [375,390,680,681,1024,1440]) {
    await send('Emulation.setDeviceMetricsOverride',{width,height:1100,deviceScaleFactor:1,mobile:width<=680});
    for(const variant of ['current','editorial','refined']) {
      await navigate(`http://127.0.0.1:4322/${variant}.html`);
      const result=JSON.parse(await evaluate(`JSON.stringify({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth,titles:[...document.querySelectorAll('.article-card h2')].map(el=>el.textContent),descriptions:[...document.querySelectorAll('.article-card .article-copy>p')].map(el=>el.textContent),images:document.images.length,remoteResources:performance.getEntriesByType('resource').filter(r=>!r.name.startsWith(location.origin)).map(r=>r.name),height:document.documentElement.scrollHeight})`));
      if(result.overflow||result.images||result.remoteResources.length||JSON.stringify(result.titles)!==JSON.stringify(expected.map(a=>a.title))||JSON.stringify(result.descriptions)!==JSON.stringify(expected.map(a=>a.description)))throw new Error(`Validation failed: ${variant} ${width}`);
      report.push({variant,...result});
      if([390,1024].includes(width)) {
        const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width,height:result.height,scale:1}});
        await writeFile(join(out,`${variant}-${width}.png`),Buffer.from(shot.data,'base64'));
      }
    }
  }
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1100,deviceScaleFactor:1,mobile:false});
  await navigate('http://127.0.0.1:4322/');
  for(const width of [1024,390]) {
    await evaluate(`document.querySelector('button[data-width="${width}"]').click()`);
    const state=JSON.parse(await evaluate(`JSON.stringify({pressed:document.querySelector('button[aria-pressed="true"]').dataset.width,frames:[...document.querySelectorAll('iframe')].map(el=>el.contentWindow.innerWidth),overflow:document.documentElement.scrollWidth>innerWidth})`));
    if(state.pressed!==String(width)||state.frames.some(w=>w!==width)||state.overflow)throw new Error('Comparison width switching failed');
    const height=await evaluate('document.documentElement.scrollHeight');
    const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width:1440,height,scale:1}});
    await writeFile(join(out,`comparison-${width}.png`),Buffer.from(shot.data,'base64'));
    report.push({comparison:state});
  }
  await writeFile(join(out,'verification.json'),JSON.stringify(report,null,2));
  console.log('PASS: all 3 variants at 6 widths; exact article text; no overflow, images or remote requests; PC/mobile comparison switching.');
  await send('Browser.close');
} finally { socket?.close();chrome.kill(); }
