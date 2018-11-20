package com.github.verbatim144.zadanie_kalkulator_s.service.Taxes;

public class UnitedKingdomTax implements TaxCalculator {

    private double fixedCosts = 600;
    private double taxPercentage = 0.25;

    @Override
    public double calculateFixedCosts(double incomeValue) {
        return incomeValue - fixedCosts;
    }

    @Override
    public double calculateNetTax(double incomeValue) {
        return incomeValue * taxPercentage;
    }


}
