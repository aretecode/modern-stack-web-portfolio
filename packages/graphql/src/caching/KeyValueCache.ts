export interface CacheOptionsType {
  ttl?: number
}
export interface KeyValueCacheType {
  delete(key: string, options: CacheOptionsType): Promise<void | undefined>
  get(key: string): Promise<string | undefined>
  set(key: string, value: string, options?: CacheOptionsType): Promise<void>
  clear(): Promise<void>
}

export class KeyValueCache implements KeyValueCacheType {
  protected store: Map<string, string> = new Map()

  async get(key: string): Promise<string | undefined> {
    const value = this.store.get(key)
    return Promise.resolve(value)
  }

  async set(
    key: string,
    value: string,
    options: CacheOptionsType = {}
  ): Promise<void> {
    this.store.set(key, value)
    return Promise.resolve()
  }

  async delete(
    key: string,
    options: CacheOptionsType = {}
  ): Promise<void> {
    this.store.delete(key)
    return Promise.resolve()
  }

  async clear(): Promise<void> {
    this.store.clear()
  }
}
