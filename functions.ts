function function_name(param1: number): number {
//kood
return param1;
}
//string add function
function concatenate_these_two_strings(str1: string, str2: string): string {
    return str1+" "+str2;
}
//tagastuseta funktsioon
function say_my_name(name: string): void {
    console.log(name)
}
function greet_me(name: string, greeting?: string): string {
    if (greeting === undefined) {
        greeting = "hallos"
    }
    return greeting + " " + name;
}

console.log( greet_me("heviveponsgai", "your mader is fat"))