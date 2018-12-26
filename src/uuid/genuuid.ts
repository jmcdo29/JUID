export function genUUID(): string {
  const N = ['8', '9', 'a', 'b'];
  const M = '4';
  let id = '';
  for (let i = 0; i < 16; i++) {
    const B = Math.round(Math.random() * 1000) % 256;
    switch (i) {
      case 6:
        id += M + (B % 16).toString(16);
        break;
      case 8:
        id += N[Math.round(Math.random() * 100) % 4] + (B % 16).toString(16);
        break;
      case 3:
      case 5:
      case 7:
      case 9:
        id += B.toString(16).padStart(2, '0') + '-';
        break;
      default:
        id += B.toString(16).padStart(2, '0');
        break;
    }
  }
  return id;
}
