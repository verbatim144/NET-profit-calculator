package com.github.verbatim144.zadanie_kalkulator_s.service.Converter;

import com.github.verbatim144.zadanie_kalkulator_s.model.Currency;
import com.github.verbatim144.zadanie_kalkulator_s.model.Rates;
import org.springframework.web.client.RestTemplate;

public class EURConverter implements Converter {


    RestTemplate restTemplate = new RestTemplate();

    private Rates EURrate() {
        String RateResourceUrl = "http://api.nbp.pl/api/exchangerates/rates/c/eur";
        return restTemplate.getForObject(RateResourceUrl, Currency.class).getBidRate();
        }

@Override
public double convertCurrency(double incomeValue) {
        return incomeValue * (Double.valueOf(EURrate().getBid()));
        }

        }
