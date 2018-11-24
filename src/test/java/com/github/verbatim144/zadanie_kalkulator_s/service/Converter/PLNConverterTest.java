package com.github.verbatim144.zadanie_kalkulator_s.service.Converter;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class PLNConverterTest {

    private PLNConverter plnConverter;

    @Before
    public void init(){
        plnConverter = new PLNConverter();
    }

    @Test
    public void getPLNValue(){
        assertEquals(100, plnConverter.convertCurrency(100), 0.01);
        assertEquals(1000, plnConverter.convertCurrency(1000), 0.01);
    }

}