package org.hospital.management.service;

import java.util.Date;
import java.util.List;

import org.hospital.management.dao.PatientRepo;
import org.hospital.management.exception.handler.DataNotFoundException;
import org.hospital.management.exception.handler.EmptyResultException;
import org.hospital.management.exception.handler.IllegalArgumentException;
import org.hospital.management.exception.handler.KeyConstraintException;
import org.hospital.management.model.DoctorDetail;
import org.hospital.management.model.PatientDetail;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

/*
 * Patient service class 
 */


@Service
public class PatientServiceImplementation implements PatientService {
	private static final Logger log = LoggerFactory.getLogger(PatientServiceImplementation.class);
	
	@Autowired
	PatientRepo patientRepo;
	
	
	/*
	 * to get patients list service 
	 */
	@Override
	public List<PatientDetail> patients() {
		if(noOfRecords() > 0) {
			log.info("get patient details service is success");
			return (List<PatientDetail>) patientRepo.findAll();
		}else {
			log.error("get patient details service - No data available");
			throw new DataNotFoundException("No data available");
		}
	}
	
	
	/*
	 * to insert patient service 
	 */
	@Override
	public List<PatientDetail> insertPatientService(PatientDetail patientData) {
		try{
			patientData.setCreationDate(new Date());
		patientRepo.save(patientData);
		log.info("insert patient details service is success");
		return patients();
		}
		catch(DataIntegrityViolationException e){
			log.error("insert patient details service - Patient cannot be added - Due to foreign key conflict");
			throw new KeyConstraintException("Patient cannot be added - Due to foreign key conflict");	
		}
	}
	
	
	/*
	 * to delete a patient by id service 
	 */
	@Override
	public List<PatientDetail> deletePatientService(String id){
		try {
			patientRepo.deleteById(id);
			if(noOfRecords() >0) {
				log.info("delete patient details service is success");
				return patients();
			}else {
				log.error("delete patient details service - No data available");
				throw new DataNotFoundException("No data available");
			}
		}
		catch(Exception e) {
			log.error("delete patient details service - No match found for the id");
			throw new EmptyResultException("No match found for the id");
		}
	}
	

	/*
	 * to update a patient details service 
	 */
	@Override
	public List<PatientDetail> updatePatientDetailService(PatientDetail updateInfo){
		try {
		PatientDetail matchedData = patientRepo.findById(updateInfo.getId()).get(); 
		if(updateInfo.getName()!="") {
			matchedData.setName(updateInfo.getName());
		}
		if(updateInfo.getDisease()!="") {
			matchedData.setDisease(updateInfo.getDisease());
		}
		if(updateInfo.getHistory()!="") {
			matchedData.setHistory(updateInfo.getHistory());
		}
		patientRepo.save(matchedData);
		log.info("update patient details service is success");
		return patients();
		}
		catch(Exception e) {
			if(e.getMessage().contains("The given id must not be null")) {
				log.error("update patient details service - Patient id must not be null");
				throw new IllegalArgumentException("Patient id must not be null");
			}else {
				return null;
			}
		}
	}
	
	
	/*
	 * to get number of patients count service 
	 */
	@Override
	public int noOfRecords() {
		log.info("count patient details service is success");
		return (int) patientRepo.count();
	}
	
	
}
