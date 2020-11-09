package org.hospital.management.controller;

import java.util.List;

import org.hospital.management.model.DoctorDetail;
import org.hospital.management.model.PatientDetail;
import org.hospital.management.service.PatientService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/*
 * patient detail controller 
 */
@CrossOrigin
@RestController
@RequestMapping(value = "/patient")
public class PatientController {
	private static final Logger log = LoggerFactory.getLogger(PatientController.class);
	
	
	@Autowired
	PatientService patientService;
	
	/*
	 * get patient detail controller 
	 */
	@GetMapping(value = "/details")
	public List<PatientDetail> doctorDetail() {
		log.info("get patient details");
		return patientService.patients();
	}
	
	/*
	 * add patient detail controller 
	 */
	@PostMapping(value = "/add")
	public List<PatientDetail> insertDoctor(@RequestBody PatientDetail PatientData) {
		log.info("add a doctor ","{},{},{}",PatientData.getName(),PatientData.getDisease(),PatientData.getHistory());
		return patientService.insertPatientService(PatientData);
	}
	
	/*
	 * delete patient detail controller 
	 */
	@RequestMapping(value = "/delete")
	public List<PatientDetail> deletePatient(@RequestParam String id){
		log.info("delete patient details for id ","{}",id);
		return patientService.deletePatientService(id);
	}
	
	/*
	 * update patient detail controller 
	 */
	@PostMapping(value = "/update")
	public List<PatientDetail> updateDoctor(@RequestBody PatientDetail updateInfo){
		log.info("update doctor details","{},{},{},{}",updateInfo.getId(),updateInfo.getName(),updateInfo.getDisease(),updateInfo.getHistory());
		return patientService.updatePatientDetailService(updateInfo);
	}
	
}
