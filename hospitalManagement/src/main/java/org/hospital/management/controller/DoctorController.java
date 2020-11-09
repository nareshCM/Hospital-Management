package org.hospital.management.controller;

import java.util.List;

import org.hospital.management.model.DoctorDetail;
import org.hospital.management.service.DoctorService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


/*
 * doctor detail controller 
 */
@CrossOrigin
@RestController
@RequestMapping(value = "/doctor")
public class DoctorController {
	private static final Logger log = LoggerFactory.getLogger(DoctorController.class);
	
	@Autowired
	DoctorService doctorService;
	
	/*
	 * get doctor detail controller 
	 */
	@GetMapping(value = "/details")
	public List<DoctorDetail> doctorDetail() {
		log.info("get doctor details");
		return doctorService.doctors();
	}
	
	/*
	 * add doctor detail controller 
	 */
	@PostMapping(value = "/add")
	public List<DoctorDetail> insertDoctor(@RequestBody DoctorDetail doctorData) {
		log.info("add a doctor ","{},{},{}",doctorData.getName(),doctorData.getSpecialist(),doctorData.getAvailability());
		return doctorService.insertDoctorService(doctorData);
	}
	
	/*
	 * find doctor detail based on specialist field controller 
	 */
	@GetMapping(value = "/find")
	public List<DoctorDetail> findDoctor(@RequestParam(value = "specialist") String specialist){
		log.info("get doctor details based on specialist ","{}",specialist);
		List<DoctorDetail> specialistMatched = doctorService.findDoctorService(specialist);
		return specialistMatched;
	}
	
	/*
	 * delete doctor detail controller 
	 */
	@GetMapping(value = "/delete")
	public List<DoctorDetail> deleteDoctor(@RequestParam(value = "id")String id) {
		log.info("delete doctor details for id ","{}",id);
		return doctorService.deleteDoctorService(id);
	}
	
	/*
	 * update doctor detail controller 
	 */
	@PostMapping(value = "/update")
	public List<DoctorDetail> updateDoctor(@RequestBody DoctorDetail updateInfo){
		log.info("update doctor details","{},{},{},{}",updateInfo.getId(),updateInfo.getName(),updateInfo.getAvailability(),updateInfo.getSpecialist());
		return doctorService.updateDoctorDetailService(updateInfo);
	}

}
