package org.hospital.management.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "[patient-table]")
public class PatientDetail {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private String id;
private String doctorID;
private String name;
private String disease;
private String history;
private Date creationDate;
@ManyToOne
@JoinColumn(name = "doctorID",updatable = false,insertable = false)
private DoctorDetail doctorDetail;


public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getDoctorID() {
	return doctorID;
}
public void setDoctorID(String doctorID) {
	this.doctorID = doctorID;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getDisease() {
	return disease;
}
public void setDisease(String disease) {
	this.disease = disease;
}
public String getHistory() {
	return history;
}
public void setHistory(String history) {
	this.history = history;
}
public Date getCreationDate() {
	return creationDate;
}
public void setCreationDate(Date creationDate) {
	this.creationDate = creationDate;
}
//public DoctorDetail getDoctorDetail() {
//	return doctorDetail;
//}
//public void setDoctorDetail(DoctorDetail doctorDetail) {
//	this.doctorDetail = doctorDetail;
//}

}
