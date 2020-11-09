package org.hospital.management.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name = "[doctor-Table]")
public class DoctorDetail {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String id;
	private String name = "";
	private String specialist = "";
	private Boolean availability = false;
	private Date creationDate = null;
	@OneToMany(mappedBy = "doctorDetail",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	private List<PatientDetail> patientDetail;
	
	
	public List<PatientDetail> getPatientDetail() {
		return patientDetail;
	}
	public void setPatientDetail(List<PatientDetail> patientDetail) {
		this.patientDetail = patientDetail;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSpecialist() {
		return specialist;
	}
	public void setSpecialist(String specialist) {
		this.specialist = specialist;
	}
	public Boolean getAvailability() {
		return availability;
	}
	public void setAvailability(Boolean availability) {
		this.availability = availability;
	}
	public Date getCreationDate() {
		return creationDate;
	}
	public void setCreationDate(Date creationDate) {
		this.creationDate = creationDate;
	}
	
	
	
}
