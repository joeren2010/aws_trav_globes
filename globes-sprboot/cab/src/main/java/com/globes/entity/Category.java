package com.globes.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonBackReference;


@Entity
@Table(name="category")
@NamedQuery(name="Category.findAll", query="SELECT c FROM Category c")
public class Category implements Serializable{
	private static final long serialVersionUID = 1L;
	
	//add fields
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="categoryid")					//tells springboot to map to categoryid
	private int categoryId;						//by default: springboot will map this to category_id
	@Column(name="categoryname")
	private String categoryName;
	@Column(name="categorydescription")
	private String categoryDescription;
	@Lob
	@Column(name="categoryimageurl", columnDefinition="LONGBLOB")
	private String categoryImageUrl;
	private boolean active;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="addedon")
	private Date addedOn;
	
	//bi-directional one-to-many association to Product
	@OneToMany(mappedBy="category")
	@JsonBackReference
	private List<Cab> cabs;
	
	
	//default constructor
	public Category() {
		super();
	}

	
	//parameterized constructor
	public Category(int categoryId, String categoryName, String categoryDescription, String categoryImageUrl,
			boolean active, Date addedOn, List<Cab> cabs) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.categoryDescription = categoryDescription;
		this.categoryImageUrl = categoryImageUrl;
		this.active = active;
		this.addedOn = addedOn;
		this.cabs = cabs;
	}

	
	//getter and setter methods
	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

	public String getCategoryDescription() {
		return categoryDescription;
	}

	public void setCategoryDescription(String categoryDescription) {
		this.categoryDescription = categoryDescription;
	}

	public String getCategoryImageUrl() {
		return categoryImageUrl;
	}

	public void setCategoryImageUrl(String categoryImageUrl) {
		this.categoryImageUrl = categoryImageUrl;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Date getAddedOn() {
		return addedOn;
	}

	public void setAddedOn(Date addedOn) {
		this.addedOn = addedOn;
	}

	public List<Cab> getCabs() {
		return cabs;
	}

	public void setCabs(List<Cab> cabs) {
		this.cabs = cabs;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	//override to-string method
	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", categoryName=" + categoryName + ", categoryDescription="
				+ categoryDescription + ", categoryImageUrl=" + categoryImageUrl + ", active=" + active + ", addedOn="
				+ addedOn + ", cabs=" + cabs + "]";
	}
	
}