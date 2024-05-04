import "server-only";

export function division(a: number, b: number) {
    if(b == 0){
        return "El divisor debe ser diferente de cero" 
    }else{
        return a / b;
    }
}