package com.github.verbatim144.zadanie_kalkulator_s.service.Taxes;

public class GermanyTax implements TaxCalculator{

    private double fixedCosts = 800;
    private double taxPercentage = 0.20;

    @Override
    public double calculateFixedCosts(double incomeValue) {
            return incomeValue - fixedCosts;
    }

    @Override
    public double calculateNetTax(double incomeValue) {
            return incomeValue - (incomeValue * taxPercentage);
    }


}
