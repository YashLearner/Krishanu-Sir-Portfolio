import fs from 'node:fs/promises';
import sharp from 'sharp';

const sources = [
  ['burp-suite', 'https://portswigger.net/content/images/logos/apple-touch-icon.png'],
  ['nuclei', 'https://raw.githubusercontent.com/projectdiscovery/nuclei/dev/static/nuclei-logo.png'],
  ['semgrep', 'https://raw.githubusercontent.com/semgrep/semgrep/develop/semgrep.svg'],
  ['codeql', 'https://codeql.github.com/assets/img/favicons/favicon.png'],
];
await fs.mkdir('public/Images/tools', { recursive: true });
for (const [name, source] of sources) {
  const response = await fetch(source);
  if (!response.ok) throw new Error(`${name}: ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(bytes).metadata();
  await sharp(bytes).resize(160,48,{fit:'inside',withoutEnlargement:true}).png().toFile(`public/Images/tools/${name}.png`);
  process.stdout.write(JSON.stringify({name,source,width:metadata.width,height:metadata.height})+'\n');
}
