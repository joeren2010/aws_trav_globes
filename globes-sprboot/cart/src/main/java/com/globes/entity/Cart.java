package com.globes.entity;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@Entity
@Table(name = "cart")
@NamedQuery(name = "Cart.findAll", query = "SELECT c FROM Cart c")
public class Cart implements Serializable {
	private static final long serialVersionUID = 1L;

	// add fields
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "cartid") 				// tells springboot to map to cartid
	private int cartId; 					// by default: springboot will map this to cart_id
	@Column(name = "cabid")
	private int cabId;
	@Column(name = "cabtitle")
	private String cabTitle;
	private int quantity;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "addedon")
	private Date addedOn;

	@PrePersist
	private void onCreate() {
		addedOn = new Date();
	}

	@Column(name = "pickuploc")
	private String pickupLoc;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "pickupdate")
	private LocalDate pickupDate;

	@JsonDeserialize(as = LocalTime.class)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "h:mm a")
	@Column(name = "pickuptime")
	private LocalTime pickupTime;

	@Column(name = "dropoffloc")
	private String dropoffLoc;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
	@Column(name = "dropoffdate")
	private LocalDate dropoffDate;

	@JsonDeserialize(as = LocalTime.class)
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "h:mm a")
	@Column(name = "dropofftime")
	private LocalTime dropoffTime;

	@Column(name = "tripdistance", precision = 8, scale = 2)
	private float tripDistance;
	@Column(name = "travelcharges", precision = 8, scale = 2)
	private float travelCharges;
	@Column(name = "itemssubtotal", precision = 8, scale = 2)
	private float itemsSubTotal;

	
	// default constructor
	public Cart() {
		super();
	}

	
	// parameterized constructor
	public Cart(int cartId, int cabId, String cabTitle, int quantity, Date addedOn, String pickupLoc,
			LocalDate pickupDate, LocalTime pickupTime, String dropoffLoc, LocalDate dropoffDate, LocalTime dropoffTime,
			float tripDistance, float travelCharges, float itemsSubTotal) {
		super();
		this.cartId = cartId;
		this.cabId = cabId;
		this.cabTitle = cabTitle;
		this.quantity = quantity;
		this.addedOn = addedOn;
		this.pickupLoc = pickupLoc;
		this.pickupDate = pickupDate;
		this.pickupTime = pickupTime;
		this.dropoffLoc = dropoffLoc;
		this.dropoffDate = dropoffDate;
		this.dropoffTime = dropoffTime;
		this.tripDistance = tripDistance;
		this.travelCharges = travelCharges;
		this.itemsSubTotal = itemsSubTotal;
	}

	// getter and setter methods
	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public int getCabId() {
		return cabId;
	}

	public void setCabId(int cabId) {
		this.cabId = cabId;
	}

	public String getCabTitle() {
		return cabTitle;
	}

	public void setCabTitle(String cabTitle) {
		this.cabTitle = cabTitle;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Date getAddedOn() {
		return addedOn;
	}

	public void setAddedOn(Date addedOn) {
		this.addedOn = addedOn;
	}

	public String getPickupLoc() {
		return pickupLoc;
	}

	public void setPickupLoc(String pickupLoc) {
		this.pickupLoc = pickupLoc;
	}

	public LocalDate getPickupDate() {
		return pickupDate;
	}

	public void setPickupDate(LocalDate pickupDate) {
		this.pickupDate = pickupDate;
	}

	public LocalTime getPickupTime() {
		return pickupTime;
	}

	public void setPickupTime(LocalTime pickupTime) {
		this.pickupTime = pickupTime;
	}

	public String getDropoffLoc() {
		return dropoffLoc;
	}

	public void setDropoffLoc(String dropoffLoc) {
		this.dropoffLoc = dropoffLoc;
	}

	public LocalDate getDropoffDate() {
		return dropoffDate;
	}

	public void setDropoffDate(LocalDate dropoffDate) {
		this.dropoffDate = dropoffDate;
	}

	public LocalTime getDropoffTime() {
		return dropoffTime;
	}

	public void setDropoffTime(LocalTime dropoffTime) {
		this.dropoffTime = dropoffTime;
	}

	public float getTripDistance() {
		return tripDistance;
	}

	public void setTripDistance(float tripDistance) {
		this.tripDistance = tripDistance;
	}

	public float getTravelCharges() {
		return travelCharges;
	}

	public void setTravelCharges(float travelCharges) {
		this.travelCharges = travelCharges;
	}

	public float getItemsSubTotal() {
		return itemsSubTotal;
	}

	public void setItemsSubTotal(float itemsSubTotal) {
		this.itemsSubTotal = itemsSubTotal;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	// override to-string method
	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", cabId=" + cabId + ", cabTitle=" + cabTitle + ", quantity=" + quantity
				+ ", addedOn=" + addedOn + ", pickupLoc=" + pickupLoc + ", pickupDate=" + pickupDate + ", pickupTime="
				+ pickupTime + ", dropoffLoc=" + dropoffLoc + ", dropoffDate=" + dropoffDate + ", dropoffTime="
				+ dropoffTime + ", tripDistance=" + tripDistance + ", travelCharges=" + travelCharges
				+ ", itemsSubTotal=" + itemsSubTotal + "]";
	}

}
