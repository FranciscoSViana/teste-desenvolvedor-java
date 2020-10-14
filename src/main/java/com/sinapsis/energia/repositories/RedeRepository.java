package com.sinapsis.energia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sinapsis.energia.entities.Rede;

@Repository
public interface RedeRepository extends JpaRepository<Rede, Long> {

}
