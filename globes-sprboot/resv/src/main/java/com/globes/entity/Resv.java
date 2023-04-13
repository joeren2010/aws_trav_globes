package com.globes.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;


@Entity
@Table(name="resv")
@NamedQuery(name="Resv.findAll", query="SELECT r FROM Resv r")
public class Resv implements Serializable{
	private static final long serialVersionUID = 1L;
	
	//add fields
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="resvid")					
	private int resvId;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss.SSSSSS")
	@Column(name="resvdate")
	private Date resvDate;				//pls use cart's "addedOn" field
	@Column(name="clientname")					
	private String clientName;				//pls use client's "fullName" field
	@Column(name="clientid")					
	private int clientId;
	@Column(name="clientemail")					
	private String clientEmail;			//pls use client's "email" field
	@Column(name="clientphone")					
	private String clientPhone;			//pls use client's "phone" field
	@Column(name="cartid")					
	private int cartId;
	@Column(name="pickuploc")	
	private String pickupLoc;
	@Column(name="dropoffloc")
	private String dropoffLoc;
	@Column(name="tripdistance")
	private float tripDistance;
	@Column(name="unitprice")			//pls use cab's "unitPrice" field
	private float unitPrice;
	@Column(name="itemssubtotal")		//pls use cart's "itensSubTotal" field
	private float itemsSubTotal;
	@Column(name="drivername")					
	private String driverName;	
	@Column(name="driverid")					
	private int driverId;		
	@Column(name="cabid")					
	private int cabId;
	@Column(name="resvstatus")
	private String resvStatus;											

	
	//default constructor
	public Resv() {
		super();
	}
	
	
	//parameterized constructor
	public Resv(int resvId, Date resvDate, String clientName, int clientId, String clientEmail, String clientPhone,
			int cartId, String pickupLoc, String dropoffLoc, float tripDistance, float unitPrice, float itemsSubTotal,
			String driverName, int driverId, int cabId, String resvStatus) {
		super();
		this.resvId = resvId;
		this.resvDate = resvDate;
		this.clientName = clientName;
		this.clientId = clientId;
		this.clientEmail = clientEmail;
		this.clientPhone = clientPhone;
		this.cartId = cartId;
		this.pickupLoc = pickupLoc;
		this.dropoffLoc = dropoffLoc;
		this.tripDistance = tripDistance;
		this.unitPrice = unitPrice;
		this.itemsSubTotal = itemsSubTotal;
		this.driverName = driverName;
		this.driverId = driverId;
		this.cabId = cabId;
		this.resvStatus = resvStatus;
	}
	
	
	//getter and setter methods
	public int getResvId() {
		return resvId;
	}

	public void setResvId(int resvId) {
		this.resvId = resvId;
	}

	public Date getResvDate() {
		return resvDate;
	}

	public void setResvDate(Date resvDate) {
		this.resvDate = resvDate;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public int getClientId() {
		return clientId;
	}

	public void setClientId(int clientId) {
		this.clientId = clientId;
	}

	public String getClientEmail() {
		return clientEmail;
	}

	public void setClientEmail(String clientEmail) {
		this.clientEmail = clientEmail;
	}

	public String getClientPhone() {
		return clientPhone;
	}

	public void setClientPhone(String clientPhone) {
		this.clientPhone = clientPhone;
	}

	public int getCartId() {
		return cartId;
	}

	public void setCartId(int cartId) {
		this.cartId = cartId;
	}

	public String getPickupLoc() {
		return pickupLoc;
	}

	public void setPickupLoc(String pickupLoc) {
		this.pickupLoc = pickupLoc;
	}

	public String getDropoffLoc() {
		return dropoffLoc;
	}

	public void setDropoffLoc(String dropoffLoc) {
		this.dropoffLoc = dropoffLoc;
	}

	public float getTripDistance() {
		return tripDistance;
	}

	public void setTripDistance(float tripDistance) {
		this.tripDistance = tripDistance;
	}

	public float getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(float unitPrice) {
		this.unitPrice = unitPrice;
	}

	public float getItemsSubTotal() {
		return itemsSubTotal;
	}

	public void setItemsSubTotal(float itemsSubTotal) {
		this.itemsSubTotal = itemsSubTotal;
	}

	public String getDriverName() {
		return driverName;
	}

	public void setDriverName(String driverName) {
		this.driverName = driverName;
	}

	public int getDriverId() {
		return driverId;
	}

	public void setDriverId(int driverId) {
		this.driverId = driverId;
	}

	public int getCabId() {
		return cabId;
	}

	public void setCabId(int cabId) {
		this.cabId = cabId;
	}

	public String getResvStatus() {
		return resvStatus;
	}

	public void setResvStatus(String resvStatus) {
		this.resvStatus = resvStatus;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	//override to-string method
	@Override
	public String toString() {
		return "Resv [resvId=" + resvId + ", resvDate=" + resvDate + ", clientName=" + clientName + ", clientId="
				+ clientId + ", clientEmail=" + clientEmail + ", clientPhone=" + clientPhone + ", cartId=" + cartId
				+ ", pickupLoc=" + pickupLoc + ", dropoffLoc=" + dropoffLoc + ", tripDistance=" + tripDistance
				+ ", unitPrice=" + unitPrice + ", itemsSubTotal=" + itemsSubTotal + ", driverName=" + driverName
				+ ", driverId=" + driverId + ", cabId=" + cabId + ", resvStatus=" + resvStatus + "]";
	}
	
}
