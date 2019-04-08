export function addTypeName(typeName: string, data: any) {
  if (Array.isArray(data)) {
    return data.map(x => {
      return {...x, __typename: typeName}
    })
  } else if (typeof data === 'string' || typeof data === 'number' || typeof data === 'function') {
    return data
  } else if (data === null || data === undefined) {
    return undefined
  } else if (typeof data === 'object') {
    return {
      __typename: typeName,
      ...data,
    }
  }
}
