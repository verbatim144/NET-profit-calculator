package com.github.verbatim144.zadanie_kalkulator_s.service.Taxes;

public class PolandTax implements TaxCalculator {

    private double fixedCosts = 1200;
    private double taxPercentage = 0.19;

    @Override
    public double calculateFixedCosts(double incomeValue) {
        return incomeValue - fixedCosts;
    }

    @Override
    public double calculateNetTax(double incomeValue) {
        return incomeValue * taxPercentage;
    }


}
