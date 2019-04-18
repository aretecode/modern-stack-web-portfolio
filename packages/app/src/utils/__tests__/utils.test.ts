/**
 * @note - have not tested `is`, it is tested in `chain-able`
 */
import { addTypeName } from '../addTypeName'
import { requestIdleCallback } from '../requestIdleCallback'
import { EMPTY_OBJ, EMPTY_ARRAY } from '../EMPTY'
import { keep } from '../keep'

describe('utils', () => {
  describe('keep', () => {
    it('should keep props we want, side effect free', () => {
      const KEEP_LIST = Object.freeze(['src', 'alt'])
      const obj = {
        src: 'canada',
        alt: 'eh',
        moose: true,
        igloo: 1,
      }
      const kept = keep(obj, KEEP_LIST)
      expect(obj === kept).toEqual(false)
      expect(kept).toEqual({
        src: 'canada',
        alt: 'eh',
      })
    })
  })
  describe('addTypeName', () => {
    it('should return the same value for all basic types', () => {
      const list = ['string', 0, () => {}, undefined]
      const listWithTypeNames = list.map(item => addTypeName('nope', item))
      expect(listWithTypeNames).toEqual(list)
    })
    it('should return undefined for null', () => {
      expect(addTypeName('', null)).toEqual(undefined)
    })
    it('should work on objects, side effect free', () => {
      const obj = {}
      const result = addTypeName('eh', obj)
      expect(obj === result).toEqual(false)
      expect(result.__typename).toEqual('eh')
    })
    it('should for arrays', () => {
      const list = [
        {
          value: 'eh',
        },
      ]
      const result = addTypeName('eh', list)
      expect(result[0].__typename).toEqual('eh')
    })
  })
  describe('requestIdleCallback', () => {
    it('should be ~immediate in test environment', () => {
      const now = Date.now()
      requestIdleCallback(() => {
        const after = Date.now()
        expect(after - now).toBeLessThan(250)
      })
    })
  })
  describe('empty', () => {
    it('should just be simple frozen empty objects', () => {
      expect(Object.isFrozen(EMPTY_OBJ)).toEqual(true)
      expect(Object.isFrozen(EMPTY_ARRAY)).toEqual(true)
      expect(EMPTY_ARRAY.length).toEqual(0)
      expect(Object.keys(EMPTY_OBJ).length).toEqual(0)
    })
  })
})
