import { genUUID } from './genuuid';

describe('#genUUID', () => {
  it('should output in a 8-4-4-4-12 pattern', () => {
    const genId = genUUID();
    expect(typeof genId).toBe('string');
    expect(genId).toMatch(/^\w{8}-(\w{4}-){3}\w{12}$/);
  });
  it('should work 256 times easily', () => {
    const ids: string[] = [];
    for (let i = 0; i < 256; i++) {
      ids.push(genUUID());
    }
    ids.forEach((id) => {
      expect(id).toMatch(/^\w{8}-(\w{4}-){3}\w{12}$/);
    });
  });
});
