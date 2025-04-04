export function pickle<T extends object>(data: any): T {
  function filterObject<U extends object>(obj: any, template: U): Partial<U> {
    const result: Partial<U> = {};
    for (const key of Object.keys(template) as (keyof U)[]) {
      if (key in obj) {
        if (
          typeof template[key] === "object" &&
          template[key] !== null &&
          !Array.isArray(template[key])
        ) {
          if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
          ) {
            // Recursively filter nested objects
            result[key] = filterObject(obj[key], template[key]) as U[keyof U];
          }
        } else {
          // Assign primitive values
          result[key] = obj[key];
        }
      }
    }
    return result as U;
  }
  return filterObject(data, data) as T;
}
