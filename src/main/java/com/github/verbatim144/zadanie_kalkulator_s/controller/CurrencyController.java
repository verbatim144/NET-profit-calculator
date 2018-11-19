package com.github.verbatim144.zadanie_kalkulator_s.controller;

import com.github.verbatim144.zadanie_kalkulator_s.model.Currency;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CurrencyController {

    private Map<Long, Currency> currencyMap = new HashMap<Long, Currency>(){

        private static final long serialVersionUID = 1L;
        {
            put(1L, new Currency(1L, "EUR", 123));
            put(2L, new Currency(2L, "GBP", 2343));
        }

    };

    @GetMapping(value = "/api/currencies")
    public List<Currency> getAll() {
        List<Currency> results = currencyMap.entrySet().stream()
                .map(entry -> entry.getValue())
                .collect(Collectors.toList());
        return results;
    }

    @GetMapping(value = "/api/currencies/{id}")
    public Currency getCurrency(@PathVariable Long id){
        return currencyMap.get(id);
    }

    @PostMapping(value = "/api/currencies")
    public Currency postCurrency(@RequestBody Currency currency){
        Map.Entry<Long, Currency> maxByKey = currencyMap.entrySet()
                .stream()
                .reduce((curr, nxt) -> curr.getKey() > nxt.getKey() ? curr : nxt)
                .get();
        Long nextId = (long) (maxByKey.getKey() + 1);
        currency.setId(nextId);
        currencyMap.put(nextId, currency);
        return currency;

    }



}