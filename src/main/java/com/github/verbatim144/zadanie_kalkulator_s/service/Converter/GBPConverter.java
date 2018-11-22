package com.github.verbatim144.zadanie_kalkulator_s.service.Converter;

import com.github.verbatim144.zadanie_kalkulator_s.model.Currency;
import com.github.verbatim144.zadanie_kalkulator_s.model.Rates;
import org.springframework.web.client.RestTemplate;

public class GBPConverter implements Converter {


    RestTemplate restTemplate = new RestTemplate();

    public Rates GBPrate() {
        String RateResourceUrl = "http://api.nbp.pl/api/exchangerates/rates/c/gbp/today/";
        return restTemplate.getForObject(RateResourceUrl, Currency.class).getBidRate();

    }

    @Override
    public double convertCurrency(double incomeValue) {
        System.out.println("result Conver" + incomeValue  * (Double.valueOf(GBPrate().getBid())) );
        return incomeValue * (Double.valueOf(GBPrate().getBid()));

    }

}
