package com.github.verbatim144.zadanie_kalkulator_s.repository;

import com.github.verbatim144.zadanie_kalkulator_s.model.Currency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;


//@RepositoryRestResource - customize export mapping and rels
//@CrossOrigin - annotation for permitting cross-origin requests
@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface CurrencyRepository  extends JpaRepository<Currency, Long> {
}
