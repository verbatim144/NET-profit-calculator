package com.github.verbatim144.zadanie_kalkulator_s.service.Converter;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class GBPConverterTest {

    GBPConverter gbpConverter;

    @Before
    public void init(){
        gbpConverter = new GBPConverter();
        System.out.println(Math.floor(gbpConverter.convertCurrency(100)/10)*10);
    }


    @Test
    public void getGBPConvertedValue(){
        assertEquals(480, Math.floor(gbpConverter.convertCurrency(100)/10)*10, 0.01);
        assertEquals(4800, Math.floor(gbpConverter.convertCurrency(1000)/100)*100, 0.01);
    }



}