package com.github.verbatim144.zadanie_kalkulator_s.service.Taxes;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class GermanyTaxTest {

    private GermanyTax germanyTax;

    @Before
    public void init(){
        germanyTax = new GermanyTax();
    }

    @Test
    public void calculateGermanyTax(){
        assertEquals(80, germanyTax.calculateNetTax(100.0),0.01);
        assertEquals(185002.4, germanyTax.calculateNetTax(231253), 0.01);
    }

    @Test
    public void calculateGermanyFixedCosts(){
        assertEquals(1000, germanyTax.calculateFixedCosts(1800), 0.01);
        assertEquals(0, germanyTax.calculateFixedCosts(800), 0.01);
    }
}