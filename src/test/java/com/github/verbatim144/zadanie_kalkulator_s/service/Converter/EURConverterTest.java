package com.github.verbatim144.zadanie_kalkulator_s.service.Converter;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EURConverterTest {

    private EURConverter eurConverter;

    @Before
    public void init() {
        eurConverter = new EURConverter();
    }

    @Test
    public void getEurConvertedValue(){
        assertEquals(420, Math.floor(eurConverter.convertCurrency(100)/10)*10, 0.01); //rate changes every day, and i just round it for tests
        assertEquals(4200, Math.floor(eurConverter.convertCurrency(1000)/100)*100, 0.01);

    }


}