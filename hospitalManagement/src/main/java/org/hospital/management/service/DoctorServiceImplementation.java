package org.hospital.management.service;

import java.util.Date;
import java.util.List;

import org.hospital.management.controller.PatientController;
import org.hospital.management.dao.DoctorRepo;
import org.hospital.management.exception.handler.DataNotFoundException;
import org.hospital.management.exception.handler.EmptyResultException;
import org.hospital.management.exception.handler.NullPointerException;
import org.hospital.management.model.DoctorDetail;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/*
 * Doctor service class 
 */


@Service
public abstract class DoctorServiceImplementation implements DoctorServiceInterface {
	private static final Logger log = LoggerFactory.getLogger(DoctorServiceImplementation.class);
	
	@Autowired
	DoctorRepo doctorRepo;

	
	/*
	 * to get doctors list service 
	 */
	@Override
	public List<DoctorDetail> doctors() {
		if(noOfRecords() > 0) {
			log.info("get doctor details service is success");
			return (List<DoctorDetail>) doctorRepo.findAll();
		}else {
			log.error("get doctor details service - No data available");
			throw new DataNotFoundException("No data available");
		}
	}
	
	@Override
	public List<DoctorDetail> doctors(String specialist) {
		List<DoctorDetail> foundRecord = doctorRepo.findBySpecialist(specialist);
		if(foundRecord.size() > 0) {
			log.info("find doctor details service is success");
			return foundRecord;
		}else {
			log.error("find doctor details service - No matching record found");
			throw new DataNotFoundException("No matching record found");
		}
		
	}
	
	
	/*
	 * to insert doctor service 
	 */
	@Override
	public List<DoctorDetail> insertDoctorService(DoctorDetail doctorData) {
		if((doctorData.getName()!="undefined" && doctorData.getName() != "") && (doctorData.getSpecialist() != "undefined" && doctorData.getSpecialist() != "")) {
			doctorData.setCreationDate(new Date());
			doctorRepo.save(doctorData);
			log.info("doctor details insert service is success");
			return doctors();
		}else {
			log.error("doctor details insert service - All fields are mandatory");
			throw new NullPointerException("All fields are mandatory");
		}
	}
	
	
	/*
	 * to find doctors based on their specialist service 
	 */
//	@Override
//	public List<DoctorDetail> findDoctorService(String specialist) {
//		List<DoctorDetail> foundRecord = doctorRepo.findBySpecialist(specialist);
//		if(foundRecord.size() > 0) {
//			log.info("find doctor details service is success");
//			return foundRecord;
//		}else {
//			log.error("find doctor details service - No matching record found");
//			throw new DataNotFoundException("No matching record found");
//		}
//		
//	}
	
	
	/*
	 * to delete a doctor by  id service 
	 */
	@Override
	public List<DoctorDetail> deleteDoctorService(String id) {
		try {
			doctorRepo.deleteById(id);
			if(noOfRecords() > 0) {
				log.info("delete doctor details service is success");
				return doctors();
			}else {
				log.error("delete doctor details service - No data available");
				throw new DataNotFoundException("No data available");
			}
		}
		catch(Exception e) {
			log.error("delete doctor details service - No match found for the id");
			throw new EmptyResultException("No match found for the id");
		}
	}
	
	
	/*
	 * to update a doctor details service 
	 */
	@Override
	public List<DoctorDetail> updateDoctorDetailService(DoctorDetail updateInfo){
		DoctorDetail matchedData = doctorRepo.findById(updateInfo.getId()).get(); 
		if(updateInfo.getName()!="") {
			matchedData.setName(updateInfo.getName());
		}
		if(updateInfo.getSpecialist()!="") {
			matchedData.setSpecialist(updateInfo.getSpecialist());
		}
		if(updateInfo.getAvailability() || !updateInfo.getAvailability()) {
			matchedData.setAvailability(updateInfo.getAvailability());
		}
		log.info("update doctor details service is success");
		doctorRepo.save(matchedData);
		return doctors();
	}
	
	
	/*
	 * to get number of doctors count service 
	 */
	@Override
	public int noOfRecords() {
		log.info("count doctor details service is success");
		return (int) doctorRepo.count();
	}
}
