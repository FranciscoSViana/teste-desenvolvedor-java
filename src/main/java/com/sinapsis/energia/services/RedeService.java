package com.sinapsis.energia.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.sinapsis.energia.entities.Rede;
import com.sinapsis.energia.repositories.RedeRepository;
import com.sinapsis.energia.services.exceptions.DatabaseException;
import com.sinapsis.energia.services.exceptions.ResourceNotFoundException;

@Service
public class RedeService {

	@Autowired
	private RedeRepository repository;

	public List<Rede> findAll() {
		return repository.findAll();
	}

	public Rede findById(Long id) {
		Optional<Rede> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public Rede insert(Rede obj) {
		return repository.save(obj);
	}

	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}
	}

	public Rede update(Long id, Rede obj) {
		try {
			Rede entity = repository.getOne(id);
			updateDate(entity, obj);
			return repository.save(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		}
	}

	private void updateDate(Rede entity, Rede obj) {
		entity.setCodigo(obj.getCodigo());
		entity.setNome(obj.getNome());
		entity.setTensaoNominal(obj.getTensaoNominal());

	}
}
