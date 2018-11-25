package com.github.verbatim144.zadanie_kalkulator_s.service;

import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.Converter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.TaxCalculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.util.*;


@Service
public class SalaryService {

    private TaxCalculator taxCalculator;
    private Converter converter;

    private Double netSalary;
    private int days = 22;

    DecimalFormat df = new DecimalFormat("#.##", new DecimalFormatSymbols(Locale.US));

    @Qualifier("germany")
    @Autowired
    SalaryService germanySalaryService;

    @Qualifier("poland")
    @Autowired
    SalaryService polandSalaryService;


    @Qualifier("unitedKingdom")
    @Autowired
    SalaryService unitedKingdomSalaryService;


    public SalaryService(){

    }

    public SalaryService(Converter converter, TaxCalculator taxCalculator) {
        this.converter = converter;
        this.taxCalculator = taxCalculator;
    }

    public SalaryService(TaxCalculator taxCalculator) {
        this.taxCalculator = taxCalculator;
    }


    public double monthlyNetSalary(double dailySalary){
        if(dailySalary < 0){
            return 0;
        }else {
            double monthlySalaryWithFixedCosts = taxCalculator.calculateFixedCosts(dailySalary * days);
            double monthlyNetSalary = taxCalculator.calculateNetTax(monthlySalaryWithFixedCosts);
            return converter.convertCurrency(monthlyNetSalary);
        }
    }

    private Map<String, SalaryService> salaryCalculatorMap;


    public double getNetMonthlySalary(String currency, double dailySalaryGross){

        salaryCalculatorMap = new HashMap<>();
        List<String> salaries = new ArrayList<>();

        if(currency.equals("EUR")) {
            salaryCalculatorMap.put(currency, germanySalaryService);
        }else{
            if(currency.equals("PLN")) {
                salaryCalculatorMap.put(currency, polandSalaryService);
            }else{
                salaryCalculatorMap.put(currency, unitedKingdomSalaryService);
            }
        }

        for(Map.Entry<String, SalaryService> entry : salaryCalculatorMap.entrySet()){
            salaries.add(entry.getKey() + ": " + entry.getValue().monthlyNetSalary(dailySalaryGross));
            netSalary = Double.valueOf(df.format(entry.getValue().monthlyNetSalary(dailySalaryGross)));
        }
        if(netSalary < 0){
            return 0;
        }else{
            return netSalary;
        }
    }



}
