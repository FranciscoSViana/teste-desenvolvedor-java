package com.sinapsis.energia.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "tb_rede_mt")
public class Rede implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String codigo;
	private String nome;
	private Double tensaoNominal;

	@ManyToOne
	@JoinColumn(name = "substacao_id")
	private Subestacao subestacao;

	public Rede() {
	}

	public Rede(Long id, String codigo, String nome, Double tensaoNominal, Subestacao subestacao) {
		this.id = id;
		this.codigo = codigo;
		this.nome = nome;
		this.tensaoNominal = tensaoNominal;
		this.subestacao = subestacao;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Double getTensaoNominal() {
		return tensaoNominal;
	}

	public void setTensaoNominal(Double tensaoNominal) {
		this.tensaoNominal = tensaoNominal;
	}

	public Subestacao getSubestacao() {
		return subestacao;
	}

	public void setSubestacao(Subestacao subestacao) {
		this.subestacao = subestacao;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Rede other = (Rede) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
}
