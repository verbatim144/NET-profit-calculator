package com.github.verbatim144.zadanie_kalkulator_s.service;

import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.EURConverter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.GBPConverter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.PLNConverter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.GermanyTax;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.PolandTax;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.UnitedKingdomTax;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;


public class SalaryServiceTest {

    GermanyTax germanyTax;
    UnitedKingdomTax unitedKingdomTax;
    PolandTax polandTax;
    EURConverter eurConverter;
    GBPConverter gbpConverter;
    PLNConverter plnConverter;
    SalaryService salaryServiceEUR;
    SalaryService salaryServiceGBP;
    SalaryService salaryServicePLN;

    @Before
    public void init(){
        eurConverter = new EURConverter();
        gbpConverter = new GBPConverter();
        plnConverter = new PLNConverter();
        germanyTax = new GermanyTax();
        unitedKingdomTax = new UnitedKingdomTax();
        polandTax = new PolandTax();
        salaryServiceEUR = new SalaryService(eurConverter, germanyTax);
        salaryServiceGBP = new SalaryService(gbpConverter, unitedKingdomTax);
        salaryServicePLN = new SalaryService(plnConverter, polandTax);

    }

    @Test
    public void calculateNegativeMonthlyNetSalary() {
        assertEquals(0, salaryServiceEUR.monthlyNetSalary(-100.0),0.01);
    }

    @Test
    public void calculateMonthlyNetEURSalary() {
        assertEquals(4760, Math.floor(salaryServiceEUR.monthlyNetSalary(100.0)/10)*10,0.01);
        assertEquals(72100, Math.floor(salaryServiceEUR.monthlyNetSalary(1000.0)/100)*100,0.01);
    }

    @Test
    public void calculateMonthlyNetGBPSalary() {
        assertEquals(5760, Math.floor(salaryServiceGBP.monthlyNetSalary(100.0)/10)*10,0.01);
        assertEquals(77000, Math.floor(salaryServiceGBP.monthlyNetSalary(1000.0)/100)*100,0.01);
    }

    @Test
    public void calculateMonthlyNetPLNSalary() {
        assertEquals(810, Math.floor(salaryServicePLN.monthlyNetSalary(100.0)/10)*10,0.01);
        assertEquals(16800, Math.floor(salaryServicePLN.monthlyNetSalary(1000.0)/100)*100,0.01);
    }

}