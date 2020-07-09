export function concatClasses(...classes:string[]):string{
    return classes.join(' ') || '';
}