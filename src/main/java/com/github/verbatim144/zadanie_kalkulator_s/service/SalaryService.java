package com.github.verbatim144.zadanie_kalkulator_s.service;

import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.Converter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.EURConverter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.GBPConverter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.GermanyTax;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.PolandTax;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.TaxCalculator;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.UnitedKingdomTax;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
public class SalaryService {

    private TaxCalculator taxCalculator;
    private Converter converter;

    private int days = 22;


    @Bean
    SalaryService germany(){
        return new SalaryService(EURConverter(), GermanyTax());
    }

    @Bean
    Converter EURConverter() {
        return  new EURConverter();
    }

    @Bean
    TaxCalculator GermanyTax(){
        return new GermanyTax();
    }

    @Bean
    SalaryService unitedKingdom(){
        return new SalaryService(GBPConverter(), GBTax());
    }

    @Bean
    Converter GBPConverter(){
        return new GBPConverter();
    }

    @Bean
    TaxCalculator GBTax(){
        return new UnitedKingdomTax();
    }

    @Bean
    SalaryService poland(){
        return new SalaryService(PolandTax());
    }

    @Bean
    TaxCalculator PolandTax(){
        return new PolandTax();
    }

    public SalaryService(Converter converter, TaxCalculator taxCalculator) {
        this.converter = converter;
        this.taxCalculator = taxCalculator;
    }

    public SalaryService(TaxCalculator taxCalculator) {
        this.taxCalculator = taxCalculator;
    }


    public Double monthlyNetSalary(double dailySalary){

        double monthlySalary = dailySalary * days;
        double monthlySalaryWithFixedCosts = taxCalculator.calculateFixedCosts(monthlySalary);
        double monthlyNetSalary =  taxCalculator.calculateNetTax(monthlySalaryWithFixedCosts);

        return converter.convertCurrency(monthlyNetSalary);
    }








}
