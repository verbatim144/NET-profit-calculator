package com.github.verbatim144.zadanie_kalkulator_s.service.Taxes;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class PolandTaxTest {

    private PolandTax polandTax;

    @Before
    public void init(){
        polandTax= new PolandTax();
    }

    @Test
    public void calculatePolandTax(){
        assertEquals(81, polandTax.calculateNetTax(100.0),0.01);
        assertEquals(187314.93, polandTax.calculateNetTax(231253), 0.01);
    }

    @Test
    public void calculatePolandFixedCosts(){
        assertEquals(600, polandTax.calculateFixedCosts(1800), 0.01);
        assertEquals(0, polandTax.calculateFixedCosts(1200), 0.01);
    }

}