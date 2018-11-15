package com.github.verbatim144.zadanie_kalkulator_s.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

//@JsonIgnoreProperties: to ignore any unknown properties in JSON input without exception
@JsonIgnoreProperties(ignoreUnknown = true)
public class Currency {

    private String currency;
    private Rates[] rates;

    public Currency(){

    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Rates[] getRates() {
        return rates;
    }

    public void setRates(Rates[] rates) {
        this.rates = rates;
    }

}
