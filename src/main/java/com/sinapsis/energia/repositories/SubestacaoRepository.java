package com.sinapsis.energia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sinapsis.energia.entities.Subestacao;

@Repository
public interface SubestacaoRepository extends JpaRepository<Subestacao, Long> {

}
