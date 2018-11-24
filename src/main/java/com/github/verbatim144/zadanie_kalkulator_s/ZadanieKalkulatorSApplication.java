package com.github.verbatim144.zadanie_kalkulator_s;

import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.Converter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.EURConverter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.GBPConverter;
import com.github.verbatim144.zadanie_kalkulator_s.service.Converter.PLNConverter;
import com.github.verbatim144.zadanie_kalkulator_s.service.SalaryService;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.GermanyTax;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.PolandTax;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.TaxCalculator;
import com.github.verbatim144.zadanie_kalkulator_s.service.Taxes.UnitedKingdomTax;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ZadanieKalkulatorSApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZadanieKalkulatorSApplication.class, args);
	}

	@Bean
	SalaryService germany(){
		return new SalaryService(EURConverter(), GermanyTax());
	}

	@Bean
	Converter EURConverter() {
		return  new EURConverter();
	}

	@Bean
	TaxCalculator GermanyTax(){
		return new GermanyTax();
	}

	@Bean
	SalaryService unitedKingdom(){
		return new SalaryService(GBPConverter(), GBTax());
	}

	@Bean
	Converter GBPConverter(){
		return new GBPConverter();
	}

	@Bean
	TaxCalculator GBTax(){
		return new UnitedKingdomTax();
	}

	@Bean
	SalaryService poland(){
		return new SalaryService(PLNConverter(), PolandTax());
	}

	@Bean
	Converter PLNConverter(){
		return new PLNConverter();
	}

	@Bean
	TaxCalculator PolandTax(){
		return new PolandTax();
	}


}
