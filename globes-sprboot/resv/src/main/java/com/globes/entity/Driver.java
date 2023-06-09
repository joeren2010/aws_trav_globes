package com.globes.entity;

import java.time.LocalDate;
import java.util.List;
import javax.persistence.*;


public class Driver {
	//add fields
	private int driverid;
	private String fullname;
	private String address;
	private String phone;
	private String email;
	private String username;
	private String password;
	private String cfmpassword;
	private LocalDate addedon;
	private int logintype;
	
	@OneToMany
	@JoinColumn(name = "driverid",referencedColumnName = "driverid")
	private List<Resv> listOfResv;
	
	
	//default constructor
	public Driver() {
		super();
	}
	
	
	//parameterized constructor
	public Driver(int driverid, String fullname, String address, String phone, String email, String username,
			String password, String cfmpassword, LocalDate addedon, int logintype, List<Resv> listOfResv) {
		super();
		this.driverid = driverid;
		this.fullname = fullname;
		this.address = address;
		this.phone = phone;
		this.email = email;
		this.username = username;
		this.password = password;
		this.cfmpassword = cfmpassword;
		this.addedon = addedon;
		this.logintype = logintype;
		this.listOfResv = listOfResv;
	}
	
	
	//getter and setter methods
	public int getDriverid() {
		return driverid;
	}

	public void setDriverid(int driverid) {
		this.driverid = driverid;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCfmpassword() {
		return cfmpassword;
	}

	public void setCfmpassword(String cfmpassword) {
		this.cfmpassword = cfmpassword;
	}

	public LocalDate getAddedon() {
		return addedon;
	}

	public void setAddedon(LocalDate addedon) {
		this.addedon = addedon;
	}

	public int getLogintype() {
		return logintype;
	}

	public void setLogintype(int logintype) {
		this.logintype = logintype;
	}

	public List<Resv> getListOfResv() {
		return listOfResv;
	}

	public void setListOfResv(List<Resv> listOfResv) {
		this.listOfResv = listOfResv;
	}


	//override to-string method
	@Override
	public String toString() {
		return "Driver [driverid=" + driverid + ", fullname=" + fullname + ", address=" + address + ", phone=" + phone
				+ ", email=" + email + ", username=" + username + ", password=" + password + ", cfmpassword="
				+ cfmpassword + ", addedon=" + addedon + ", logintype=" + logintype + ", listOfResv=" + listOfResv
				+ "]";
	}
	
}