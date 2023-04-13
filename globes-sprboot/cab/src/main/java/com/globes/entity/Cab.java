package com.globes.entity;

import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;
import javax.persistence.*;
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name = "cab")
@NamedQuery(name = "Cab.findAll", query = "SELECT c FROM Cab c")
public class Cab implements Serializable {
	private static final long serialVersionUID = 1L;

	// add fields
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "cabid") // tells springboot to map to cabid
	private int cabId; // by default: springboot will map this to cab_id
	@Column(name = "cabcolor")
	private String cabColor;
	@Column(name = "cabtitle")
	private String cabTitle;
	@Column(name = "cabdescription")
	private String cabDescription;
	@Column(name = "price", precision = 6, scale = 2)
	private float price;
	@Column(name = "unitprice", precision = 4, scale = 2)
	private float unitPrice;
	private int rating;

	@ElementCollection // stores a list of values as an entity
	@OrderColumn(name = "imageid") // ensures the order in the column is maintained
	@CollectionTable(name = "imageinfo") // defines the table name
	@Lob // specifies the datatype "blob" type
	@Column(name = "images", columnDefinition = "LONGBLOB") // ensures "longblob" is the assigned "blob" type
	private String images[]; // array-field for array-table

	@Column(name = "thumbnailimage")
	private int thumbnailImage;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "addedon")
	private Date addedOn;

	@PrePersist
	private void onCreate() {
		addedOn = new Date();
	}

	//bi-directional many-to-one association to Category
	@ManyToOne
	//@JsonIgnore
	//@JsonManagedReference
	@JoinColumn(name="categoryid", nullable=false)
	private Category category;


	// default constructor
	public Cab() {
		super();
	}

	
	// parameterized constructor
	public Cab(int cabId, String cabColor, String cabTitle, String cabDescription, float price, float unitPrice,
			int rating, String[] images, int thumbnailImage, Date addedOn, Category category) {
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
		this.category = category;
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

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	// override to-string method
	@Override
	public String toString() {
		return "Cab [cabId=" + cabId + ", cabColor=" + cabColor + ", cabTitle=" + cabTitle + ", cabDescription="
				+ cabDescription + ", price=" + price + ", unitPrice=" + unitPrice + ", rating=" + rating + ", images="
				+ Arrays.toString(images) + ", thumbnailImage=" + thumbnailImage + ", addedOn=" + addedOn
				+ ", category=" + category + "]";
	}
	
}