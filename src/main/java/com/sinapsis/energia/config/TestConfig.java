package com.sinapsis.energia.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.sinapsis.energia.entities.Rede;
import com.sinapsis.energia.entities.Subestacao;
import com.sinapsis.energia.repositories.RedeRepository;
import com.sinapsis.energia.repositories.SubestacaoRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

	@Autowired
	private SubestacaoRepository subestacaoRepository;

	@Autowired
	private RedeRepository redeRepository;

	@Override
	public void run(String... args) throws Exception {

		Subestacao sub1 = new Subestacao(null, "AML", "Subestação A", -23.2744134389987, -49.4702838173763);
		Subestacao sub2 = new Subestacao(null, "MKP", "Subestação B", -22.6999266804592, -46.996111878849);
		Subestacao sub3 = new Subestacao(null, "ZFA", "Subestação C", -23.0917377538889, -48.9241617522699);

		subestacaoRepository.saveAll(Arrays.asList(sub1, sub2, sub3));

		Rede rede1 = new Rede(null, "ZFA01", "Alimentador principal 1", 1.0, sub3);
		Rede rede2 = new Rede(null, "ZFA02", "Alimentador principal 2", 1.0, sub3);
		Rede rede3 = new Rede(null, "ZFA03", "Alimentador de contingenciamento", 1.0, sub3);

		redeRepository.saveAll(Arrays.asList(rede1, rede2, rede3));

	}

}
