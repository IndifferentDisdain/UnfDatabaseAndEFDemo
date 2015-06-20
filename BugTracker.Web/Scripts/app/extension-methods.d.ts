interface Array<T> {

    findByProp(prop: string, value: any): Array<T>;

    // Optional parameters
    firstOrDefault(predicate?: any): T;

    first(predicate?: any): T;

} 