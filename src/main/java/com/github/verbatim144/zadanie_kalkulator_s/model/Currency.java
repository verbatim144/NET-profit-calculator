package com.github.verbatim144.zadanie_kalkulator_s.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

//@JsonIgnoreProperties - to ignore any unknown properties in JSON input without exception
//@Entity - indicating that it is a JPA entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
public class Currency {

    @Id
    @GeneratedValue
    private Long id;
    private String currency;
    private Double value;
    private Rates[] rates;
    private Double inputUser;


    public Currency(){

    }

    public Currency(Long id, String currency, Double inputUser, Double value) {
        this.id = id;
        this.currency = currency;
        this.inputUser = inputUser;
        this.value = value;

    }

    public Double getInputUser() {
        return inputUser;
    }

    public void setInputUser(Double inputUser) {
        this.inputUser = inputUser;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    @JsonIgnore
    public Rates getBidRate(){
        return rates[0];
    }

    public Rates[] getRates() {
        return rates;
    }

    public void setRates(Rates[] rates) {
        this.rates = rates;
    }


}
