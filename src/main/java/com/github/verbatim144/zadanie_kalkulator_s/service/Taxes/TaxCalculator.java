package com.github.verbatim144.zadanie_kalkulator_s.service.Taxes;

public interface TaxCalculator{

    public double calculateFixedCosts(double incomeValue);
    public double calculateNetTax(double incomeValue);


}
