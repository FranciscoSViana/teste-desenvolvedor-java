package com.sinapsis.energia.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.sinapsis.energia.entities.Subestacao;
import com.sinapsis.energia.repositories.SubestacaoRepository;
import com.sinapsis.energia.services.exceptions.DatabaseException;
import com.sinapsis.energia.services.exceptions.ResourceNotFoundException;

@Service
public class SubestacaoService {

	@Autowired
	private SubestacaoRepository repository;

	public List<Subestacao> findAll() {
		return repository.findAll();
	}

	public Subestacao findById(Long id) {
		Optional<Subestacao> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}

	public Subestacao insert(Subestacao obj) {
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

	public Subestacao update(Long id, Subestacao obj) {
		try {
			Subestacao entity = repository.getOne(id);
			updateData(entity, obj);
			return repository.save(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException(id);
		}
	}

	private void updateData(Subestacao entity, Subestacao obj) {
		entity.setCodigo(obj.getCodigo());
		entity.setNome(obj.getNome());
		entity.setLatitude(obj.getLatitude());
		entity.setLongitude(obj.getLongitude());
	}
}
