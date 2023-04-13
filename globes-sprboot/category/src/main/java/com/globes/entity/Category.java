package com.globes.entity;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import javax.persistence.*;


@Entity
@Table(name="category")
@NamedQuery(name="Category.findAll", query="SELECT c FROM Category c")
public class Category {
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

//	@OneToMany
//	@JoinColumn(name = "categoryid",referencedColumnName = "categoryid")
//	private List<Cab> listOfCab;
	
	
	//default constructor
	public Category() {
		super();
	}

	
	//parameterized constructor
	public Category(int categoryId, String categoryName, String categoryDescription, String categoryImageUrl,
			boolean active, Date addedOn) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.categoryDescription = categoryDescription;
		this.categoryImageUrl = categoryImageUrl;
		this.active = active;
		this.addedOn = addedOn;
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

//	public List<Cab> getListOfCab() {
//		return listOfCab;
//	}
//	public void setListOfCab(List<Cab> listOfCab) {
//		this.listOfCab = listOfCab;
//	}

	//override to-string method
	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", categoryName=" + categoryName + ", categoryDescription="
				+ categoryDescription + ", categoryImageUrl=" + categoryImageUrl + ", active=" + active + ", addedOn="
				+ addedOn + "]";
	}
	
}
