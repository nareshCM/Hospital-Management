package org.hospital.management.service;

import java.util.List;

import org.hospital.management.model.DoctorDetail;
import org.springframework.stereotype.Service;


/*
 * doctor detail service interface 
 */
public interface DoctorServiceInterface {

	List<DoctorDetail> doctors();
	
	List<DoctorDetail> doctors(String specialist);

	List<DoctorDetail> insertDoctorService(DoctorDetail doctorData);

	//List<DoctorDetail> findDoctorService(String specialist);
	
	List<DoctorDetail> deleteDoctorService(String id);
	
	List<DoctorDetail> updateDoctorDetailService(DoctorDetail updateInfo);
	
	int noOfRecords();

}