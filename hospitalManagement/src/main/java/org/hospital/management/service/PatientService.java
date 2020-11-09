package org.hospital.management.service;

import java.util.List;

import org.hospital.management.model.PatientDetail;
import org.springframework.stereotype.Service;


/*
 * patient detail service interface 
 */
public interface PatientService {

	List<PatientDetail> patients();

	List<PatientDetail> insertPatientService(PatientDetail patientData);
	
	List<PatientDetail> deletePatientService(String id);
	
	int noOfRecords();

	List<PatientDetail> updatePatientDetailService(PatientDetail updateInfo);

}