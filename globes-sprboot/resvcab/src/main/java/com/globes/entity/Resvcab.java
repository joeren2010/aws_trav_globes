package com.globes.entity;

import javax.persistence.Entity;
import javax.persistence.NamedQuery;
import javax.persistence.Table;


@Entity
@Table(name="resvcab")
@NamedQuery(name="Resvcab.findAll", query="SELECT rc FROM Resvcab rc")
public class Resvcab {
	//add fields
}
