export function dividirNumeros(numerador, denominador) {
    if (denominador === 0) {
      return "OPERAÇÃO INVALIDA";
    }
    
    if (numerador < 0 || denominador < 0) {
      return "OPERAÇÃO INVALIDA";
    }
  
    return numerador / denominador;
  }
  