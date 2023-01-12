package unitTests;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

import devcalc.Calc;

public class testaCalc {
    @Test
    public void testarSomarDoisNumeros() {
        // 1 - Prepara  -Configurar - Given
        int num1 = 5;
        int num2 = 7;
        int resultadoEsperado = 12;

        // 2 - Executar - When
        int resultadoAtual = Calc.somarDoisNumeros(num1, num2);

        // 3 - Validar - Then
        assertEquals(resultadoEsperado,resultadoAtual);
    }


    @Test
    public void testarMain(){

    }
}