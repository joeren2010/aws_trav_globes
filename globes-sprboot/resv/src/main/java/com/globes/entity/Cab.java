package com.globes.entity;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import javax.persistence.*;


public class Cab {
	// add fields
	private int cabId; 
	private String cabColor;
	private String cabTitle;
	private String cabDescription;
	private float price;
	private float unitPrice;
	private int rating;
	private String images[]; // array-field for array-table
	private int thumbnailImage;
	private Date addedOn;
	
	@OneToMany
	@JoinColumn(name = "cabid",referencedColumnName = "cabid")
	private List<Resv> listOfResv;
	
//	private Category category;


	// default constructor
	public Cab() {
		super();
	}

	// parameterized constructor
	public Cab(int cabId, String cabColor, String cabTitle, String cabDescription, float price, float unitPrice,
			int rating, String[] images, int thumbnailImage, Date addedOn, List<Resv> listOfResv) {
		super();
		this.cabId = cabId;
		this.cabColor = cabColor;
		this.cabTitle = cabTitle;
		this.cabDescription = cabDescription;
		this.price = price;
		this.unitPrice = unitPrice;
		this.rating = rating;
		this.images = images;
		this.thumbnailImage = thumbnailImage;
		this.addedOn = addedOn;
		this.listOfResv = listOfResv;
	}

	// getter and setter methods
	public int getCabId() {
		return cabId;
	}

	public void setCabId(int cabId) {
		this.cabId = cabId;
	}

	public String getCabColor() {
		return cabColor;
	}

	public void setCabColor(String cabColor) {
		this.cabColor = cabColor;
	}

	public String getCabTitle() {
		return cabTitle;
	}

	public void setCabTitle(String cabTitle) {
		this.cabTitle = cabTitle;
	}

	public String getCabDescription() {
		return cabDescription;
	}

	public void setCabDescription(String cabDescription) {
		this.cabDescription = cabDescription;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(float unitPrice) {
		this.unitPrice = unitPrice;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String[] getImages() {
		return images;
	}

	public void setImages(String[] images) {
		this.images = images;
	}

	public int getThumbnailImage() {
		return thumbnailImage;
	}

	public void setThumbnailImage(int thumbnailImage) {
		this.thumbnailImage = thumbnailImage;
	}

	public Date getAddedOn() {
		return addedOn;
	}

	public void setAddedOn(Date addedOn) {
		this.addedOn = addedOn;
	}

	public List<Resv> getListOfResv() {
		return listOfResv;
	}

	public void setListOfResv(List<Resv> listOfResv) {
		this.listOfResv = listOfResv;
	}

	// override to-string method
	@Override
	public String toString() {
		return "Cab [cabId=" + cabId + ", cabColor=" + cabColor + ", cabTitle=" + cabTitle + ", cabDescription="
				+ cabDescription + ", price=" + price + ", unitPrice=" + unitPrice + ", rating=" + rating + ", images="
				+ Arrays.toString(images) + ", thumbnailImage=" + thumbnailImage + ", addedOn=" + addedOn
				+ ", listOfResv=" + listOfResv + "]";
	}

}