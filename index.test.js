const typeOf = require('./index');
const expect = require('chai').expect;

describe('is type', () => {
  describe('isArray', () => {
    it('true', () => {
      expect(typeOf.isArray([])).to.be.ok;
    })
    it('false', () => {
      expect(typeOf.isArray({})).to.not.be.ok;
    })
  });

  describe('isArrayBuffer', () => {
    it('true', () => {
      expect(typeOf.isArrayBuffer(new ArrayBuffer(8))).to.be.ok;
    })
    it('false', () => {
      expect(typeOf.isArrayBuffer([])).to.not.be.ok;
    })
  })

  describe('isString', () => {
    it('true', () => {
      expect(typeOf.isString('')).to.be.ok
    })
    it('false', () => {
      expect(typeOf.isString({})).to.not.be.ok
    })
  })

  describe('isNumber', () => {
    it('true', () => {
      expect(typeOf.isNumber(1)).to.be.ok;
    })
    it('false', () => {
      expect(typeOf.isNumber('1')).to.not.be.ok;
    })
  })

  describe('isUndefined', () => {
    it('true', () => {
      expect(typeOf.isUndefined(undefined)).to.be.ok;
    })
    it('false', () => {
      expect(typeOf.isUndefined(null)).to.not.be.ok;
    })
  })

  describe('isObject', () => {
    it('true', () => {
      expect(typeOf.isObject({})).to.be.ok;
      
    })
    it('false', () => {
      expect(typeOf.isObject(undefined)).to.not.be.ok;
      expect(typeOf.isObject(null)).to.not.be.ok;
    })
  })
});
