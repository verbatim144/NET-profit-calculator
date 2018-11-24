package com.github.verbatim144.zadanie_kalkulator_s.service.Taxes;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class UnitedKingdomTaxTest {

    private UnitedKingdomTax unitedKingdomTax;

    @Before
    public void init(){
        unitedKingdomTax = new UnitedKingdomTax();
    }

    @Test
    public void calculateUnitedKingdomTax(){
        assertEquals(75, unitedKingdomTax.calculateNetTax(100.0),0.01);
        assertEquals(173439.75, unitedKingdomTax.calculateNetTax(231253), 0.01);
    }

    @Test
    public void calculateUnitedKingdomFixedCosts(){
        assertEquals(1200, unitedKingdomTax.calculateFixedCosts(1800), 0.01);
        assertEquals(600, unitedKingdomTax.calculateFixedCosts(1200), 0.01);
    }

}